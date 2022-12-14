const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

const emojifyWord = (word) => {
    const firstLetter = word.at(0);
    const lastLetter = word.at(-1);

    if (firstLetter === ':' && lastLetter === ':') {
        const wordWithoutColons = word.slice(1, word.length - 1);

        const result = emojis[wordWithoutColons];

        return typeof result !== 'undefined' ? result : wordWithoutColons;
    } else {
        return word
    }
}

const emojifyPhrase = (phrase) => {
    return phrase.split(' ').map(word => emojifyWord(word)).join(' ');
}
