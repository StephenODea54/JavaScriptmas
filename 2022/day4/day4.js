const whisper = (sentence) => {
    const sentenceLower = sentence.toLowerCase();
    
    return sentenceLower.endsWith('!') ?
           'shh... ' + sentenceLower.slice(0, sentenceLower.length - 1) :
           'shh... ' + sentenceLower;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
