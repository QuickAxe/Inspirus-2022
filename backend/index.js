const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose')
const port = 8000;
require('dotenv/config')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
const signupRoute = require('./routes/signup.js');
app.use('/signup', signupRoute);

const sd = require('./routes/sd.js');
app.use('/landing(.html)?', sd);


app.get('/', (req, res) => {
    res.send('Hello world');
}
);


// connecting to MongoDB
mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));


//


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
