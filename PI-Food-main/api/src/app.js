const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const errorHandler = require('./utils/middlewares/errorHandler.js');
const setHeader = require('./utils/middlewares/setHeader.js');
const {conn} = require('./db.js');


require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeader);

server.use('/', routes);



// Error catching endware.
server.use(errorHandler);

conn.sync({forse: true})
.then(()=>{
    
})
module.exports = server; 
