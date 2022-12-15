/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

const isPalindrome = (str) => {
    const strArr = [];
    
    for (let i = str.length - 1; i >= 0; i--) {
        strArr.push(str[i]);
    }
    
    const strBackwards = strArr.join('');
    
    return str === strBackwards;
}
