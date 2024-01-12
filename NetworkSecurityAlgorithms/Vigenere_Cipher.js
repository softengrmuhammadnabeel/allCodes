// Vigenere Cipher Overview:
// The Vigenere cipher is a method of encrypting text using a keyword.
// It employs a repeating key to shift letters in the plaintext, creating the ciphertext.
// Each letter in the plaintext is shifted by the corresponding letter in the key.

// Vigenere Cipher Implementation in JavaScript:

// Define the plaintext and key
let plainText = "MD nAbeel khan";
let key = "bcd";
let ciphertext = "";

// Function to perform Vigenere encryption and decryption
function vigenere() {
    // Calculate the length of the key needed and repeat it accordingly
    let PTlength = Math.ceil(plainText.length / key.length);
    let newkey = key.repeat(PTlength);

    // Iterate through each character in the plaintext
    for (let i = 0; i < plainText.length; i++) {
        let alphabet = plainText[i];

        // Check if the character is alphabetic
        if ((alphabet >= 'A' && alphabet <= 'Z') || (alphabet >= 'a' && alphabet <= 'z')) {
            // Use this line for basic key repetition logic
            // let encryptedChar = String.fromCharCode((alphabet.charCodeAt() + newkey[i].charCodeAt() - 2 * baseCharCode) % 26 + baseCharCode);

            // Use this line for advanced key repetition logic
            let keyChar = key[i % key.length];
            let baseCharCode = alphabet >= 'a' ? 'a'.charCodeAt() : 'A'.charCodeAt();
            let encryptedChar = String.fromCharCode((alphabet.charCodeAt() + keyChar.charCodeAt() - 2 * baseCharCode) % 26 + baseCharCode);

            // Append the encrypted character to the ciphertext
            ciphertext += encryptedChar;
        } else {
            // Non-alphabetic characters are left unchanged
            ciphertext += alphabet;
        }
    }

    // Perform decryption to check if it works
    let decryptedText = decryption(ciphertext, key);

    // Display results
    console.log("Original Text: " + plainText);
    console.log("Key: " + key);
    console.log("Encrypted Text: " + ciphertext);
    console.log("Decrypted Text: " + decryptedText);
}

// Function to perform Vigenere decryption
function decryption(ciphertext, key) {
    let decryptedText = '';
    let PTlength = Math.ceil(plainText.length / key.length);
    let newkey = key.repeat(PTlength);

    // Iterate through each character in the ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        let currentChar = ciphertext[i];

        // Check if the character is alphabetic
        if ((currentChar >= 'A' && currentChar <= 'Z') || (currentChar >= 'a' && currentChar <= 'z')) {
            let baseCharCode = currentChar >= 'a' ? 'a'.charCodeAt() : 'A'.charCodeAt();
            // Use this line for advanced key repetition logic
            // let keyChar = key[i % key.length];
            // let decryptedCharCode = (currentChar.charCodeAt() - keyChar.charCodeAt() + 26) % 26 + baseCharCode;

            // Use this line for basic key repetition logic
            let decryptedCharCode = (currentChar.charCodeAt() - newkey[i].charCodeAt() + 26) % 26 + baseCharCode;
            let decryptedChar = String.fromCharCode(decryptedCharCode);

            // Append the decrypted character to the decrypted text
            decryptedText += decryptedChar;
        } else {
            // Non-alphabetic characters are left unchanged
            decryptedText += currentChar;
        }
    }

    // Return the decrypted text
    return decryptedText;
}

// Call the Vigenere function to demonstrate encryption and decryption
vigenere();
