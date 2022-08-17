class ChatReport {
    maxCount: number = 100;
    sentimentScores: { [key: string]: [number] } = {}

    setMaxCount(maxItemCount: number) {
        this.maxCount = maxItemCount;
        
        return this;
    }

    updateSentiment(channel: string, sentimentScore: number) {
        if (this.sentimentScores[channel] === undefined) {
            this.sentimentScores[channel] = [sentimentScore];
            return;
        }

        this.sentimentScores[channel].push(sentimentScore);
        if (this.sentimentScores[channel].length > this.maxCount) {
            this.sentimentScores[channel].shift();
        }
    }

    getAverageSentiment(channel: string): number {
        if (this.sentimentScores[channel] === undefined) {
            return 0;
        }
        
        var totalScore = 0;
        this.sentimentScores[channel].forEach((score) => { totalScore += score });

        return totalScore / this.sentimentScores[channel].length;
    }
}

export { ChatReport };
