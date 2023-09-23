const createSendToken = require('../middlware/createSendToken');
const catchAsync = require('../middlware/catchAsync');
const AppError = require('../server-side/utils/AppError');
const User = require('../models/user'); 
const redisClient = require('../config/redisClient');
const dataTools = require('../server-side/utils/dataTools');
const upload = require('../config/upload');


exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    birthday: req.body.birthday,
    city: req.body.city,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    gender: req.body.gender,
    phone: req.body.phone,
    position: req.body.position,
    department: req.body.department,
    education: req.body.education,
    role: req.body.role
  });  

  createSendToken(newUser, 201, res);
});


exports.login = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const { email, password, rememberMe} = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  createSendToken(user, 200, res, rememberMe);
});

exports.logout = (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ status: 'error', message: 'No token provided' });
  }
  addToTokenBlacklist(token);
  res.status(200).json({ status: 'success' });
};



exports.getAllUsers = catchAsync(async (req, res) => {
  const dataHandler = new dataTools(User.find(), req.query);

  dataHandler.filter().sort().limitFields().paginate();
  const usersQuery = User.find(dataHandler.query._conditions);
  const totalUsers = await usersQuery.countDocuments();

  const users = await dataHandler.query.exec();

  const cacheKey = `all_users:${JSON.stringify(req.query)}`;
  const cachedData = await redisClient.get(cacheKey);

const statusCount = await User.aggregate([
  { $group : {_id:'$department', count:{ $sum: 1} } }
])




  if (cachedData) {
    const cachedResponse = JSON.parse(cachedData);
    res.status(200).json({
      status: 'success',
      total: cachedResponse.total,
      result: cachedResponse.result,
      statusCountCount: cachedResponse.statusCount,
      data: cachedResponse.data,
    });
    console.log('Data retrieved from Redis cache');
  } else {
    const responseData = { status: 'success', total: totalUsers, result: users.length, statusCount: statusCount, data: users };
    await redisClient.setex(cacheKey, 300, JSON.stringify(responseData));
    res.status(200).json(responseData);
    console.log('Data retrieved from MongoDB');
  }
});




exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id )
if (!user) {
return res.status(404).json({ status: 'fail', message: 'User not found.' });
}
await redisClient.setex(`user_${req.params.id}`, 300, JSON.stringify(user));
res.status(200).json({ status: 'success', data: user });
console.log('User:',user.name)
});


exports.createUser = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);
  const users = await User.find();
  await redisClient.setex('all_users', 300, JSON.stringify(users));
  res.status(201).json({ status: 'success', data: newUser });
  console.log("U added new user!")
});

exports.updateUser = catchAsync(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!updatedUser) {
    return res.status(404).json({ status: 'fail', message: 'User not found.' });
  }
  await redisClient.del(`user_${req.params.id}`);
  res.status(200).json({ status: 'success', data: { user: updatedUser } });
  console.log("Updated finished!")
});

exports.deleteUser = catchAsync(async (req, res) => {
  const deletedUser = await User.findById(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({ status: 'fail', message: 'User not deleted.' });
  }
  await redisClient.del(`user_${req.params.id}`);
  res.status(200).json({ status: 'success', data: null});
  console.log("Ups its gone!")
});


exports.upload = catchAsync(async (req, res) => {
  const userId = req.params.id; 
  if (!userId) {
    return res.status(400).json({ status: 'fail', message: 'User ID not provided.' });
  }
  const file = req.file; 
  if (!file) {
    return res.status(400).json({ status: 'fail', message: 'No file uploaded.' });
  }
  const fileUrl = file.location; 
    const user = await User.findByIdAndUpdate(userId, { profilePhoto: fileUrl }, { new: true });
    if (!user) {
      return res.status(404).json({ status: 'fail', message: 'User not found.' });
    }
    res.status(200).json({ status: 'success', message: 'File uploaded to S3.' });
  });
