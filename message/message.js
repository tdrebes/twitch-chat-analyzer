import Sentiment from "sentiment";

class Message {
    constructor(text,username) {
        this.text = text;
        this.username = username;
    }

    getSentiment() {
        var sentiment = new Sentiment().analyze(this.text);

        return {
            'score': sentiment.score,
            'comparative': sentiment.comparative,
            'negative': sentiment.negative,
            'positive': sentiment.positive,
        }
    }
}

export { Message };