const cron = require("node-cron");
const express = require("express");
const { preScript } = require('./preScript.js');
const time = require('./models/cron-times');

const app = express();

console.log(`start executions . . .`);

preScript();

const job = cron.schedule(time.EVERY_TWO_MINUTES,() => {
    preScript();
});

cron.schedule(time.EVERY_DAY_AT_9_AM,() => {
    job.start();
    console.log(`started job . . .`);
});

cron.schedule(time.EVERY_DAY_AT_6_PM,() => {
    job.stop();
    console.log(`stoped job . . .`);
});

app.listen(1313);