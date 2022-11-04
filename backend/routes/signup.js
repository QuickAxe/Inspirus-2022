const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await Users.find();
    res.send(users);
    // try {
    //     const users = await Users.findById(res.body);
    //     res.status(201).json(users);
    // } catch (err) {
    //     res.status(400).send(err);
    // }
});

router.post('/', async (req, res) => {
    const user = await new Users(req.body);
    //res.send(user);
    user.save((err) => {
        if (err)
            return console.log(err.message);
        else
            res.status(201).send(user);
    }
    );
    
});

module.exports = router;