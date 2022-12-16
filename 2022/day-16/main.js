const insertDashes = (str) => {
    // Split str by spaces
    strSplit = str.trim().split('');
    
    // For each letter in the array, add a space
    // if that character is not blank
    strArrSplit = [];
    
    strSplit.forEach(char => {
        if (char === ' ') {
            strArrSplit.pop();
            strArrSplit.push(char);
        } else {
            strArrSplit.push(char);
            strArrSplit.push('-')
        }
    }); 
    
    // Take off last hyphen
    strArrSplit.pop();
    
    return strArrSplit.join('');
};


/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
