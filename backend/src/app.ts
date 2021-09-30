import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';


// load dotenv file
dotenv.config({ path: 'src/config/config.env' });

// route file
import routesV1 from '../src/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mounte route
app.use('/v1', routesV1);

// Add headers to prevent cors
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,X-auth-token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});


// adding morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
