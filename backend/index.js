//import express from 'express'
//import 
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000;
require('dotenv/config')
app.get('/', (req, res) => {
    res.send('Hello world');
}
);


// connecting to MongoDB

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('Connected to MongoDB!')
);
    
module.exports = app;