const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose')
var spawn = require('child_process').spawn;


// initialising stable diffusion backend

const child = spawn('cd C:\Users\Atharva\Desktop\Team-TNT__INSPIRUS22\backend\stable-diffusion && conda env create -f environment.yaml && conda activate ldm', {shell: true});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});






const port = 8000;
require('dotenv/config')

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// Routes
const signupRoute = require('./routes/signup.js');
app.use('/signup', signupRoute);

const userRoute = require('./routes/user.js');
app.use('/user', userRoute);


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





app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
