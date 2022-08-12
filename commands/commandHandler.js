const client = require('../client.js');

let commandHandler = (target, message) => {
    const command = message.substr(2);

    switch(command) {
        case "ping":
            client.say(target, "pong");
            break;
        default:
            console.log(`* Unknown command: ${command}`);
            return;
    }

    console.log(`* Executed command: ${command}`);
}

module.exports = {
    handle: (target, message) => {
        commandHandler(target, message)
    }
}