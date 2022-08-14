import { Client as TMIClient } from 'tmi.js';

import { readFileSync } from "fs";
const config = JSON.parse(readFileSync("./config.json"));

class Client {
    constructor() {
        this.client = new TMIClient(config.options);
    }

    say(channel, message) {
        this.client.say(channel, message);
    }

    on(event, callback) {
        this.client.on(event, callback);
    }

    connect() {
        this.client.connect();
    }

    disconnect() {
        this.client.disconnect();
    }
}

export { Client };