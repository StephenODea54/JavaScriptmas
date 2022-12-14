# Valid Time

Check if the given string is a correct time representation of the 24-hour clock.

## Example 1
```js
const time = '13:58';
const result = validTime(time);
console.log(result); //True
```

## Example 2
```js
const time = '25:51';
const result = validTime(time);
console.log(result); //False
```

## Example 3
```js
const time = '02:76';
const result = validTime(time);
console.log(result); //False
```
Answer is contained in the first part of `main.js`.