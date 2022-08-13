const Client = require('./client.js')
const CommandHandler = require('./commands/commandHandler.js');
const Mood = require('./message/mood.js');

Client.on('message', onMessageHandler);
Client.on('connected', onConnectedHandler);
Client.on('disconnected', onDisconnectedHandler);
Client.connect();

function onMessageHandler (target, context, msg, self) {
    if (self) { 
        return;
    }

    const message = msg.trim();

    if (message.startsWith('$_')) {
        CommandHandler.handle(target, message);
        return;
    }

    console.log(`* Read message: ${message}`);
    console.log(`* Message credit score: ${Mood.sentiment(message).score}`);
}

function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(msg) {
    console.log(msg);
}
