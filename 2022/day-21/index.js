const awardBonuses = () => {
    const vacation = (num) => num % 3 === 0 && num % 5 !== 0;
    const bonus = (num) => num % 3 !== 0 && num % 5 === 0;
    const jackpot = (num) => num % 3 === 0 && num % 5 === 0;
    
    for (let i = 1; i < 101; i++) {
        if (vacation(i)) {
            console.log(`${i} - Vacation!`);
        } else if (bonus(i)) {
            console.log(`${i} - $100,000 bonus!`)
        } else if (jackpot(i)) {
            console.log(`${i} - JACKPOT: 1 Million and a Yacht!`)
        } else {
            console.log(`${i} - :(`)
        }
    };    
};

awardBonuses();
