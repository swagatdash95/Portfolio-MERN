require('dotenv').config({ path: './Config.env'});
import express from 'express';
import apiRouter from './api';
import mongoose from 'mongoose';

const cors = require("cors");
const server = express();
server.use(cors());
const prt = process.env.PORT;
const DB = process.env.DATABASE;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api',apiRouter);
server.use(express.static('public'));

// Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
server.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  }).then(()=>{
    console.log('Connection Successfully achieved');
  }).catch((error)=>{
    console.log('Errored:'+error);
  });
server.listen(prt,()=>{
    console.log(`Server is listening on port: ${prt}`);
});