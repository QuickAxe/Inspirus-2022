const mongoose = require('mongoose');
const Images = require('./Images');

// Schema for a how a user looks in the database
const UserSchema = mongoose.Schema(
    {
        username: String,
        email: String,
        images: [Images.schema]
    }
);

// Users is exported
module.exports = mongoose.model('Users', UserSchema);