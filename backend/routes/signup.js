const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser);

router.post('/', (req,res) => {
    const user = new Users({
        username: req.body.username,
        password: req.body.password
    });
    user.save()
    .exec()
    .then( data=> {
        res.json(data);
    })
    .catch(err =>{
        res.json({message:err});
    });
    // //try {
    //     const savedUser = await user.save();
    //     res.json(savedUser);
    // //} catch(error) {
    //   //  res.json({message:err});
    // //}
});

module.exports = router;