//import express from 'express'
//import 
const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
}
);

app.listen(port, () => {
    console.log(`Listen on ${port}`);
});
module.exports = app;