const { resolve } = require('path');
const axios = require('axios');
var spawn = require('child_process').spawn;


// self.url_txt2img = "http://localhost:7860/sdapi/v1/txt2img"
// self.simple_txt2img = {
//     "enable_hr": False,
//     "denoising_strength": 0,
//     "firstphase_width": 0,
//     "firstphase_height": 0,
//     "prompt": "example prompt",
//     "styles": [],
//     "seed": -1,
//     "subseed": -1,
//     "subseed_strength": 0,
//     "seed_resize_from_h": -1,
//     "seed_resize_from_w": -1,
//     "batch_size": 1,
//     "n_iter": 1,
//     "steps": 3,
//     "cfg_scale": 7,
//     "width": 64,
//     "height": 64,
//     "restore_faces": False,
//     "tiling": False,
//     "negative_prompt": "",
//     "eta": 0,
//     "s_churn": 0,
//     "s_tmax": 0,
//     "s_tmin": 0,
//     "s_noise": 1,
//     "sampler_index": "Euler a"
// }


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
