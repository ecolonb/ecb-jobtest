/** @type {import("express").RequestHandler} */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { dbConnection } from './database/config';
import carRoutes from './routes/cars';

const app = express();

dbConnection();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  return res.send('API Rest - typeScrpt');
});

app.use('/api/cars', carRoutes);

export default app;
