// a sample code to test sd working

const { resolve } = require("path");
var spawn = require("child_process").spawn;

// child.stdout.on('data', function (chunk) {
//     // output will be here in chunks
// });

const prompt = "earth getting stabbed with a knife";
const colour = "green and blue";
const theme = "star wars";

const prompt_full = `poster of ${prompt}, ${colour} color theme, in the style of ${theme}, highly detailed, 4k, intricate details, art by greg rutkowski`;
const child = spawn('python', [
    './sd/scripts/txt2img.py', '--prompt',
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

