const mongoose = require('mongoose');
const redisClient = require('../config/redisClient');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    surname: {
        type: String,
        required: [true, 'Surname is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Gender is required'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    birthday: {
        type: String,
        required: [true, 'Please provide a birthday'],
    },
},
{
    timestamps: true,
});


clientSchema.methods.invalidateCache = function () {
    const clientId = this._id.toString();
    redisClient.del(`client_${clientId}`);
};


clientSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        const clientId = doc._id.toString();
        await redisClient.del(`client_${clientId}`);
    }
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
