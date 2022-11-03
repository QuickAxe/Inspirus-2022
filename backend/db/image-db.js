const express = require('express');
const app = express();
// To upload the images to the cloud
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
// // Multer setup
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });

// var upload = multer({ storage: storage });

// Database schemas
const Users = require('../models/Users');
const Images = require('../models/Images');

// This is to get file paths of all images in output_temp
const Glob = require('glob').Glob;
// const { options } = require('../routes/signup');

// async function uploadToCloudinary(locaFilePath) {
    
//     // locaFilePath: path of image which was just
//     // uploaded to "uploads" folder
    
//     var mainFolderName = "main";
//     // filePathOnCloudinary: path of image we want
//     // to set when it is uploaded to cloudinary
//     var filePathOnCloudinary = 
//         mainFolderName + "/" + locaFilePath;
  
//     return cloudinary.uploader
//         .upload(locaFilePath, { public_id: filePathOnCloudinary })
//         .then((result) => {
  
//             // Image has been successfully uploaded on
//             // cloudinary So we dont need local image 
//             // file anymore
//             // Remove file from local uploads folder
//             fs.unlinkSync(locaFilePath);
  
//             return {
//                 message: "Success",
//                 url: result.url,
//             };
//         })
//         .catch((error) => {
  
//             // Remove file from local uploads folder
//             fs.unlinkSync(locaFilePath);
//             return { message: "Fail" };
//         });
// }

module.exports = async function addToDB(_id, prompt) {

    var paths = new Glob('../output_temp/*.(jpg|jpeg|png)');
    var user = Users.findById(_id);
                                                                                                                                                                                                      

};