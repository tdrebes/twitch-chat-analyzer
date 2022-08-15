import { Client } from "../client/client";

const offset: number = 2;

class CommandHandler {
    client: Client
    constructor(client: Client) {
        this.client = client;
    }

    handle(message: string, target: string, context: any): void {
        if (!context.mod && !('broadcaster' in context.badges)) {
            console.log('* Commands require moderator status');
            return;
        }

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
