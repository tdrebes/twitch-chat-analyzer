import { Client } from './client/client';
import { CommandHandler } from './commands/commandHandler';
import { Message } from './message/message';

const client = new Client();
const commandHandler = new CommandHandler(client);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);
client.connect();

function onMessageHandler (target: any, context: any, msg: any, self: any) {
    if (self) { 
        return;
    }

    const messageText = msg.trim();

    if (messageText.startsWith('$_')) {
        commandHandler.handle(target, messageText);
        return;
    }

    let message = new Message(messageText, context.username);

    console.log(`* Read message (${message.username}): ${message.text}`);
    console.log(`* Message credit score: ${message.getSentiment().score}`);
    console.log(`* `);
}

function onConnectedHandler (addr: any, port: any) {
    console.log(`* Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(msg: any) {
    console.log(msg);
}
