const { resolve } = require('path');
var spawn = require('child_process').spawn;

// child.stdout.on('data', function (chunk) {
//     // output will be here in chunks
// });

module.exports = function generate(theme, prompt, colour) {

    return new Promise(function (resolve, reject) {
        const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;
        const child = spawn('C:\Users\Atharva\anaconda3\Scripts\activate.bat cd C:\Users\Atharva\Desktop\Team-TNT__INSPIRUS22\backend\stable-diffusion && conda activate ldm ', [
            'python optimizedSD/optimized_txt2img.py', '--prompt',
            prompt_full, '--outdir', './output_temp/',
            '--ddim_eta', 'DDIM_ETA',
            '--n_samples', '4'
        ]);

        process.on('exit', function (code) {
            resolve(code);
        });

        process.on('error', function (error) {
            reject(err);
        });

    });
}; 
