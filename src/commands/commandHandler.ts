import { Client } from "../client/client";

const offset: number = 2;

class CommandHandler {
    client: Client
    constructor(client: Client) {
        this.client = client;
    }

    handle(target: any, message: string) {
        const command = message.substring(offset);

        switch(command) {
            case "ping":
                this.client.say(target, "pong");
                break;
            default:
                console.log(`* Unknown command: ${command}`);
                return;
        }

        console.log(`* Executed command: ${command}`);
    }
}

export { CommandHandler };
