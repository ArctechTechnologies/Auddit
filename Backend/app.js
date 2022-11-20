const dotenv = require('dotenv')
const express = require('express')
const res = require("express/lib/response")
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const User = require('./model/userschema')

//const PORT = process.env.PORT || 5000;
const PORT =  5000;
//adding router 
app.use(require('./router/auth'))

const middleware =(req,res,next)=>{
    console.log("middleware")
    next();
}


const { networkInterfaces } = require("os");



app.listen(PORT,()=>{

    console.log(`running at  ${PORT}`)
})







