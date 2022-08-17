import Sentiment from "sentiment";

type SentimentReport = {
    score: number;
    comparative: number;
    negative: string[];
    positive: string[];
};

class Message {
    text: string;
    username: string;
    constructor(text: string, username: string) {
        this.text = text;
        this.username = username;
    }

    getSentiment(): SentimentReport {
        var sentiment = new Sentiment(undefined).analyze(this.text, undefined, undefined);

        return {
            'score': sentiment.score,
            'comparative': sentiment.comparative,
            'negative': sentiment.negative,
            'positive': sentiment.positive,
        }
    }
}

export { Message };
