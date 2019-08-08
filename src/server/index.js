import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import socketIO from 'socket.io';
import http from 'http';

import db from './db';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000!');
});
