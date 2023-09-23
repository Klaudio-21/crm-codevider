const mongoose = require('../server-side/config/mongodb');
const bcrypt = require ('bcrypt');
const redisClient = require('../server-side/config/redisClient');

const UserSchema = new mongoose.Schema({

name: {
    type: String,
    require: [true, "Name is require"] 
},
middlename:{
  type: String,
  require:[false,"Middlename is not required"],
},
surname:{
    type: String,
    require:[ true , 'Surname is required']
},
profilePhoto:{
    type :String,
},
email :{
    type: String,
    require: [true, "Email is required"],
    unique: true,
    lowercase: true,
},
birthday:{
   type: String,
   require: [true, "Birthday is require"],
},
city: {
    type: String,
    require: [true, "City is required"],
},
phone:{  
    type: String,
    require: [true, "Phone is require"],
},
gender: {
    type:String,
    enum: ['Male', 'Female'],
    require: [true, "Gender is require"],
},
position: {
    type: String
},
salary:{
    type:Number,
    default: 500
},
department:{
    type: String,
},
role:{
    type: String,
    enum: ['admin', 'employee'],
    default: 'employee'
},
password:{
    type: String,
    require:[true, "Password is requird"],
    minlength: 8,
    select: false

},
passwordConfirm:{
type: String,
 validate: {
    validator: function(el){ 
        return el === this.password;
    },
    message:"Passwords do not match"
}
}
},
{
timestamps: true 
});



UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
  
    this.passwordConfirm = undefined;
    next();
  });



  UserSchema.pre('save', function(next) {
    if (!this.isModified('password') || this.isNew) return next();
  
    this.passwordChangedAt = Date.now() - 1000;
    next();
  });

  UserSchema.methods.correctPassword = async function(NewPassword, userPassword) {
    return await bcrypt.compare(NewPassword, userPassword);
  };



UserSchema.methods.invalidateCache = function () {
    const userId = this._id.toString();
    redisClient.del(`user_${userId}`);
};


UserSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        const userId = doc._id.toString();
        await redisClient.del(`user_${userId}`);
    }
});




const User = mongoose.model('User', UserSchema);

module.exports = User;

