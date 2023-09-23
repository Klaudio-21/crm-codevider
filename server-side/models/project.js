const mongoose=require('mongoose');
const redisClient = require('../config/redisClient');

const projectSchema=new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Project name is required'],
    },
    data:{
        type: String,
        required: true,
    },
   
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
    status:{
        type:String,
        enum: ['Not Started','In Progress','Completed']
    },
},
    {  
timestamp: true
    }
);

projectSchema.methods.invalidateCache = function () {
    const projectId = this._id.toString();
    redisClient.del(`project_${projectId}`);
};


projectSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        const projectId = doc._id.toString();
        await redisClient.del(`project_${projectId}`);
    }
});
  

const Project=mongoose.model('Project',projectSchema);
module.exports=Project;