import { Client } from './client/client';
import { CommandHandler } from './commands/commandHandler';
import { ChatReport } from './data/chatReport';
import { Datastore } from './data/datastore';
import { Message } from './chat/message';

const client = new Client();
const commandHandler = new CommandHandler(client);
const datastore = new Datastore;

var chatReport = new ChatReport().setMaxCount(101);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);
client.connect();

setInterval(function() {
    console.log("* Publishing Chat-Report...");
    datastore.publishChatReport(chatReport);
}, 10000)

function onMessageHandler (target: any, context: any, msg: any, self: any): void {
    if (self) { 
        return;
    }

    const messageText = msg.trim();

    if (messageText.startsWith('$_')) {
        commandHandler.handle(messageText, target, context);
        return;
    }

    let message = new Message(messageText, context.username);

    chatReport.updateSentiment(target, message.getSentiment().score);
}

function onConnectedHandler (addr: any, port: any): void {
    console.log(`* Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(msg: any): void {
    console.log(msg);
}
