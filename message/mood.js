var Sentiment = require('sentiment');

function getMessageSentiment(message) {
    var result = new Sentiment().analyze(message)

    return {
        'score': result.score,
        'comparative': result.comparative,
        'negative': result.negative,
        'positive': result.positive,
    }
}

module.exports.sentiment = getMessageSentiment;
