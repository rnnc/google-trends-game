const express = require('express');
const https = require('https');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

require('dotenv').config();

//dev use only
app.use(require('cors')());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then((instance) => {
    console.log(`\n_Connected to DB (Mongo)_\n`);
    if (
      process.env.NODE_ENV === "PLAYGROUND" ||
      process.env.NODE_ENV === "playground"
    ) {

      app.use(express.static('client/build'));
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });

    }
  })
  .catch((error) =>
    console.log(`\n[ Error connecting to database\n${error} ]\n`)
  );

const io = socketIO(server);
io.origins('*:*');
require('./socketHandler')(io);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(`Error starting backend\n${error}`);
    return;
  }
  console.log(`Backend server is running on localhost:${process.env.PORT}`);
});
