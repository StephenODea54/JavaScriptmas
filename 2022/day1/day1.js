const panic = (phrase) => {
    let panicPhrase = '';

    for (let char of phrase) {
        char === ' ' ? panicPhrase += ' 😱 ' : panicPhrase += char.toUpperCase();
    }
    return panicPhrase;
}
