const client = require('./client.js')
const commandHandler = require('./commands/commandHandler.js');

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);
client.connect();

function onMessageHandler (target, context, msg, self) {
    if (self) { 
        return; 
    }

    const message = msg.trim();

    if (message.startsWith('$_')) {
        commandHandler.handle(target, message);
        return;
    }

    console.log(`* Read message: ${message}`);
}

function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(msg) {
    console.log(msg);
}
