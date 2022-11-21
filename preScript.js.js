const {exec} = require('child_process');
const fs = require('fs');
const DateTime = require('./date.js');
const COMMAND_FILE = './pre_script.cmd';
const ENCODING = 'utf8';
const SPLITTER = '\n';
let i = 0;

exports.preScript = async () => {
    const commands = getConfig();
    i++;
    const now = DateTime.now();
    console.log(` #${i} -> ${now}`);
    await runCommands(commands);
};

function getConfig() {
    try {
        return fs.readFileSync(COMMAND_FILE, ENCODING).split(SPLITTER);
    } catch (err) {
        console.error(err);
    }
}

async function runCommands(commands) {
    await commands.forEach(c => {
        if(c !== '') {
            exec(c, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error}`);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
            });
        }
    });
}