// Title: Find Maximum Occurring Character(s) in a String /Sentence .
// Description: This function finds the character(s) with the maximum occurrence in a given string and prints them.
// Credits: Adopted from FreeCodeCamp algorithm channel and improved by Software Engineer MD Nabeel Khan.
// Improvement Description: Handles scenarios where multiple characters have the same maximum occurrence count. Accurately identifies single and multiple char occurrence.

let maxChar = (str) => {
    let charMapping = {};
    let strLowerCase = str.toLowerCase();

    for (let char of strLowerCase) {
        if (char !== " ") {
            charMapping[char] = charMapping[char] + 1 || 1;
        }
    }

    let max = 0;
    let maxAlphabet = '';

    for (const [key, value] of Object.entries(charMapping)) {
        if (value > max) {
            max = value;
            maxAlphabet = key;
        }
    }

    const keysWithMaxValue = [];

    for (const [key, value] of Object.entries(charMapping)) {
        if (value === max) {
            keysWithMaxValue.push([key, value]);
        }
    }

    console.log("Characters with the maximum occurrence in the sentence:");
    
    if (keysWithMaxValue.length !== 0) {
        keysWithMaxValue.forEach(item => {
            console.log(`${item[0]} = ${item[1]}`);
        });
    } else {
        console.log(`${maxAlphabet} = ${max} `);
    }
}

maxChar("SoftEngr. Md Nabeel Khan");

// Expected Result :
// e = 3
// n= 3

