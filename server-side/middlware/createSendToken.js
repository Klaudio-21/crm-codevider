const jwt = require('jsonwebtoken');


const signToken = (id, expiresIn) => {
    return jwt.sign({ id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn
    });
  };
  
  
  const createSendToken = (user, statusCode, res, rememberMe) => {
    const expiresIn = rememberMe ?  2592000000 : 864000000; 
    const token = signToken(user._id, expiresIn);
  
    user.password = undefined;
  
    res.status(statusCode).json({
      status: 'success', token,
       user
     
    });
  };
  module.exports = createSendToken;