const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

const reverseString = (arr) => {
    const lastIndex = arr.length - 1;
    const strArr = arr.split('');
    const strArrRev = [];
    
    for (let i = lastIndex; i >= 0; i--) {
        strArrRev.push(strArr[i]);
    }
    return strArrRev.join('');
}


const reverseStringsInArray = (arr) => {
    return arr.map(message => reverseString(message));
    
}
