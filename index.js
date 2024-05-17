const express = require('express');
const app = express();
const config = require('dotenv').config();
const port = process.env.PORT || 8088;
const jsonData = require('./jsonData');

function middleWare(req, res, next){
  console.log("Middleware Started...");
  next();
}

app.get('/',(req, res)=>{
  res.send("Welcome to Node Server");
})

app.get('/home', (req, res) => {
  res.send("<center><h1>Welcome to HOME PAGE</h1></center>");
})

app.get('/api/data',(req,res)=>{
  res.json(jsonData)
})

app.listen(port, (error)=>{
  if(error){
    console.log("Problem Connecting")
  }
  else{
    console.log(`Server listening to ${port}`)
  }
})