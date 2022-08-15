import { Client as TMIClient } from 'tmi.js';

import config from '../config/config.json';

class Client {
    client: TMIClient
    constructor() {
        this.client = new TMIClient(config.client);
    }

    say(channel: string, message: string) {
        this.client.say(channel, message);
    }

    on(event: any, listener: (...args: unknown[]) => void) {
        this.client.on(event, listener);
    }

    connect() {
        this.client.connect();
    }

    disconnect() {
        this.client.disconnect();
    }
}

export { Client };
