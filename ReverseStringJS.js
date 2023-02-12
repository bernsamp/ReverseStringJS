const prompt = require("prompt-sync")({sigint:true});
function reverseString(string) {

    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

const userInput = prompt('Enter a string: ');

const result = reverseString(userInput);

console.log(result);