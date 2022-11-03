const mongoose = require('mongoose');

// Schema for a how a user looks in the database
const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
);

// Users is exported
module.exports = mongoose.model('Users', UserSchema);