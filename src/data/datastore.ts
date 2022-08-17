import { initializeApp } from "firebase/app";
import { update, getDatabase, ref, set } from "firebase/database";
import config from "../config/config.json";
import { ChatReport } from "./chatReport";

// Initialize Firebase
const app = initializeApp(config.database.firebase);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

class Datastore {
    publishChatReport(chatReport: ChatReport): void {
        config.client.channels.forEach((channel) => {
            update(ref(db, 'chatReport/' + channel.replace(/[.#$\[\]'?]/g, "")), {
                sentiment: chatReport.getAverageSentiment(channel).toFixed(2),
            })
        });
    }
}

export { Datastore };
