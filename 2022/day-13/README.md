# 😎 Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing `:smile:` will replace that text with 😊 

Write a function that checks if a word that ends and beings with a `:` belongs to the emoji list (below), it will replace the word with the appropriate emoji. Otherwise, it will return the original word.

```js
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}
```
