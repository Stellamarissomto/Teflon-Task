import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'


// load dotenv file
dotenv.config({ path: 'src/config/config.env' });

// route file
import routesV1 from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// mounte route
app.use('/v1', routesV1);



// adding morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

export default app;
