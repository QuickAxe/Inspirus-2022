const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 8000;
require('dotenv/config')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   


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

mongoose 
 .connect(process.env.MONGO_PROD_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
          })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));  
