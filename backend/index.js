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


// app.get('/', (req, res) => {
//     res.send('Hello world');
// }
// );
app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

app.get('/', function (req, res) {
  res.render('pages/auth');
});

/*  PASSPORT SETUP  */

const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


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
