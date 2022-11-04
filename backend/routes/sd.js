//theme, des, color
const express = require('express');
const router = express.Router();
const sd = require('../sd/sd_module.js');



router.post('/', async (req, res) => {
    const prompt = req.body;

    console.log(prompt);
   // await sd(prompt.theme, prompt.des, prompt.color);
    //res.send(user);
    /*
    database stuff prompt userid
    */

    res.sendStatus(200);
});


module.exports = router;