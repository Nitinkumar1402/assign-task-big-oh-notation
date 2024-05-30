import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes';

createConnection().then(async () => {
  const app = express();
  app.use(bodyParser.json());

  app.use('/api', formRoutes);

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}).catch(error => console.log(error));
