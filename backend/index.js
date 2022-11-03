//import express from 'express'
//import 
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000;
require('dotenv/config')

// Routes
const signupRoute = require('./routes/signup');
app.use('/signup', signupRoute);


app.get('/', (req, res) => {
    res.send('Hello world');
}
);



app.listen(port, () => {
    console.log(`Listen on ${port}`);
});

// connecting to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('Connected to MongoDB!')
);
    
module.exports = app;