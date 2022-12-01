const panic = (phrase) => {
    let phraseArr = phrase.split('');
    
    phraseArr = phraseArr.map(letter => {
       return letter === ' ' ? ' 😱 ' : letter.toUpperCase();
    });
    
    return phraseArr.join('');
}
