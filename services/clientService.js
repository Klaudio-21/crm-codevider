const Client =  require('../models/client');
const catchAsyn = require('../middlware/catchAsync');
const redisClient = require('../config/redisClient');
const dataTools = require('../utils/dataTools');


exports.getAllClient = catchAsyn(async (req, res) => {
  const dataHandler = new dataTools(Client.find(), req.query);

  dataHandler.filter().sort().limitFields().paginate();
  const clientsQuery = Client.find(dataHandler.query._conditions);
  const totalClients = await clientsQuery.countDocuments();

  const clients = await dataHandler.query.exec();

  const cacheKey = `all_clients:${JSON.stringify(req.query)}`;
  const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
   const cachedResponse = JSON.parse(cachedData);
   res.status(200).json({
    status: 'success',
    total: cachedResponse.total,
    result: cachedResponse.result,
    data: cachedResponse.data,
  });
        console.log('Data retrieved from Redis cache');
    } else {
        const responseData = {status: 'successs', total: totalClients, result: clients.length, data: clients };
        await redisClient.setex(cacheKey, 300, JSON.stringify(responseData));
        res.status(200).json(responseData);
        console.log('Data retrieved from MongoDB');
    } 
});


exports.getClient = catchAsyn(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (!client) {
        return res.status(404).json({ status: 'fail', message: 'Client not found' });
    }
    await redisClient.setex(`client_${req.params.id}`, 300, JSON.stringify(client));

    res.status(200).json({ status: 'success', data: client });
    console.log('Client:', client.name)
});


exports.createClient = catchAsyn(async(req,res) =>{
    const newClient = await Client.create(req.body);
    const clients = await Client.find();
    await redisClient.setex('all_clients', 300, JSON.stringify(clients));
    res.status(201).json({status: 'success', data: newClient});
    console.log("New client joined");
});

exports.updateClient = catchAsyn(async (req, res) => {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!updatedClient) {
        return res.status(404).json({ status: 'fail', message: 'Client not updated' });
    }
    await redisClient.del(`client_${req.params.id}`);
    res.status(200).json({ status: 'success', data: { client: updatedClient } });
    console.log("Client data changed");
});


exports.deleteClient = catchAsyn(async (req, res) => {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
        return res.status(404).json({ status: 'fail', message: 'Client not deleted' });
    }
    await redisClient.del(`client_${req.params.id}`);
    res.status(200).json({ status: 'success', data: null });
    console.log("Client left :(")
});
