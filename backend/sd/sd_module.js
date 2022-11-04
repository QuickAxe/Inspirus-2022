const { resolve } = require('path');
const axios = require('axios');
var spawn = require('child_process').spawn;


module.exports = function generate(theme, prompt, colour) {

    const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;
    console.log(prompt_full);
    return new Promise(function (resolve, reject) {
        const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;

        const child = spawn(`python stable-diffusion\\optimizedSD\\optimized_txt2img.py -- prompt ${prompt_full} --outdir ..\\output_temp --n_samplers 4`, {
            shell: true
          });



        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
          });

          process.on('exit', function (code) {
            resolve(code);
        });
    });
}; 
