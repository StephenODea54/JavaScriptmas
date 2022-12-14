function validTime(str) {
    if (str.length > 5) {
        return false;
  } else {
        const firstNum = parseInt(str.slice(0, 2));
        const lastNum = parseInt(str.slice(3));

    if (firstNum < 0 || lastNum < 0) {
        return False;
    } else {
        const falseConditionOne = firstNum > 24;
        const falseConditionTwo = lastNum > 60;

        return !(falseConditionOne || falseConditionTwo);
    }
  }
}



/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});
