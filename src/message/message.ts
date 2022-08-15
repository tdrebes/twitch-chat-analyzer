import Sentiment from "sentiment";

class Message {
    text: string;
    username: string;
    constructor(text: string, username: string) {
        this.text = text;
        this.username = username;
    }

    getSentiment(): { score: number; comparative: number; negative: string[]; positive: string[]; } {
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
