const mongoose = require('mongoose');

// Schema for a how a user looks in the database
const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

// Users is exported
module.exports = mongoose.module('Users', UserSchema);