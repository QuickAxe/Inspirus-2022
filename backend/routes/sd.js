//theme, des, color
const express = require('express');
const router = express.Router();
const sd = require('.../sd/sd_module.js');



router.post('/', async (req, res) => {
    const prompt = req.body;
    await sd;
    //res.send(user);
    user.save((err) => {
        if (err)
            return console.log(err.message);
        else
            res.status(201).send(user);
    });
});


export default router