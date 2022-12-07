const altCaps = (str) => {
    let altStr = '';
    
    for (let i = 0; i < str.length; i++) {
        i % 2 !== 0 ? altStr += str[i] : altStr += str[i].toUpperCase();
    }
    
    return altStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
