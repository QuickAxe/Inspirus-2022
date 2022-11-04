const { resolve } = require('path');
const axios = require('axios');
var spawn = require('child_process').spawn;


module.exports = function generate(theme, prompt, colour) {

    const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;

    return new Promise(function (resolve, reject) {
        const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;

        const child = spawn(`python optimizedSD/optimized_txt2img.py -- prompt ${prompt_full} --outdir C:\Users\Atharva\Desktop\Team-TNT__INSPIRUS22\backend\output_temp --n_samplers 4 --H 512 --W 512 `, {
            shell: true
          });

        process.on('exit', function (code) {
            resolve(code);
        });

        process.on('error', function (error) {
            reject(err);
        });

    });
}; 
