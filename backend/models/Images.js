const mongoose = require('mongoose');

// Schema for a how a Image looks in the database
const ImageSchema = mongoose.Schema(
    {
        prompts: {
            prompt: String,
            colour: String,
            theme: String
        },
        image_link: String,
        cloudinary_id: String,
        date_created :{
            type: Date,
            default: Date.now
        }
    }
);

// Images is exported
module.exports = mongoose.model('Images', ImageSchema);