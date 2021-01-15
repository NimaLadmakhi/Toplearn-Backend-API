/** @format */

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const morgan = require('morgan');
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.DB, (err) => {
     if (err) throw new Error(err.message);
     server.use(bodyParser.json());
     server.use(bodyParser.urlencoded());
     server.use(morgan('dev'));
     server.use('/api', routes);

     server.listen(3000, function () {
          console.log('the project run successfully');
     });
});
