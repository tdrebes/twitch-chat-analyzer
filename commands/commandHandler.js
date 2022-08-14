const offset = 2;

class CommandHandler {
    constructor(client) {
        this.client = client;
    }

    handle(target, message) {
        const command = message.substr(offset);

        switch(command) {
            case "ping":
                this.client.say(target, "pong");
                break;
            default:s
                console.log(`* Unknown command: ${command}`);
                return;
        }

        console.log(`* Executed command: ${command}`);
    }
}

export { CommandHandler };