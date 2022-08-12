let tmi = require('tmi.js');

const config = require('./config.json');
const opts = config.options;

let client = new tmi.client(opts);

module.exports = client