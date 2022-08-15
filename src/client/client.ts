import { Client as TMIClient } from 'tmi.js';

import config from '../config/config.json';

class Client {
    client: TMIClient
    constructor() {
        this.client = new TMIClient(config.client);
    }

    say(channel: string, message: string): Promise<[string]> {
        return this.client.say(channel, message);
    }

    on(event: any, listener: (...args: unknown[]) => void): Client {
        this.client.on(event, listener);
        return this;
    }

    connect(): Promise<[string, number]> {
        return this.client.connect();
    }

    disconnect(): Promise<[string, number]> {
        return this.client.disconnect();
    }
}

export { Client };
