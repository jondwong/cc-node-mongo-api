import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logging from './config/logging';
import DB from './db';
import userRouter from './routes/user';

const logger = logging (module);

const app = express ();
app.use (cors ());
app.use (express.json ());

const port = process.env.PORT || 3000;

app.listen (port, () => {
  console.log (`Server now running on port: ${port}`);
});

app.get ('/', (req, res) => {
  logger.info ('Test log message! hey!');
  res.json ({response: 'Hello World!'});
});

app.use ('/user', userRouter);
