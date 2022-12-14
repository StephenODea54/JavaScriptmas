/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

const capitalizeWord = (word) => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return firstLetter.toUpperCase() + restOfWord;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

const toTitleCase = (str) => {
    const wordArr = str.split(' ');
    const result = wordArr.map(word => capitalizeWord(word));
    return result.join(' ')
}
