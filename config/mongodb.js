const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("You are connected with DB"))
    .catch(err => console.error("Not connected, try again", err));

module.exports = mongoose;
