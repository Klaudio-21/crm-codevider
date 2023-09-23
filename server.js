const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');

const bodyParser = require('body-parser');

const AppError = require('utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const routerController = require('./controllers/routerController');
const connectDB = require('./server-side/config/db');
const helmet = require('helmet');
const cors = require('cors');
require('colors')
require('dotenv').config()
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(helmet());
;

connectDB();
app.use(function (req, res, next) {
  console.log('')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });




if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}



app.use(express.json({ }));


app.use(mongoSanitize());



app.use(express.static(`${__dirname}/public`));


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


app.use('/', routerController);


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler)

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});