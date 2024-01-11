//   CAESAR CIPHER with customizable shift by MUHAMMAD NABEEL KHAN 
// This function performs Caesar Cipher encryption and decryption on a given string.
function Caesar_cipher_encryption(str) {
    // Initialize variables
    let Cipher = "";
    let plainText = "";
    let Shift_Code = 13; // Define the Caesar Cipher shift value

    // Encryption process
    for (let i = 0; i < str.length; i++) {
        let Code = str[i].toUpperCase().charCodeAt(); // Get ASCII code of the character

        // Encrypt uppercase letters A-M
        if (Code >= 65 && Code <= 77) {
            Code = String.fromCharCode(Code + Shift_Code); // Shift the character code
        }
        // Encrypt uppercase letters N-Z
        else if (Code >= 78 && Code <= 90) {
            Code = String.fromCharCode(Code - Shift_Code); // Shift the character code
        }
        // Leave non-alphabetic characters unchanged
        else {
            Code = String.fromCharCode(Code);
        }

        Cipher += Code; // Append the encrypted character to the Cipher string
    }

    // Decryption process
    function decryption(str) {
        for (let i = 0; i < str.length; i++) {
            let Decrypt_Code = str[i].charCodeAt(); // Get ASCII code of the character

            // Decrypt uppercase letters N-Z
            if (Decrypt_Code >= 78 && Decrypt_Code <= 90) {
                Decrypt_Code = String.fromCharCode(Decrypt_Code - Shift_Code); // Shift the character code
            }
            // Decrypt uppercase letters A-M
            else if (Decrypt_Code >= 65 && Decrypt_Code <= 77) {
                Decrypt_Code = String.fromCharCode(Decrypt_Code + Shift_Code); // Shift the character code
            }
            // Leave non-alphabetic characters unchanged
            else {
                Decrypt_Code = String.fromCharCode(Decrypt_Code);
            }

            plainText += Decrypt_Code; // Append the decrypted character to the plainText string
        }
    }

    let ciphertext = Cipher.toString();
    decryption(ciphertext); // Perform decryption on the encrypted text
    // Display results with enhanced formatting
    console.log("CAESAR CIPHER ALGORITHM by *** MD NABEEL KHAN ***");
    console.log("=================================");
    console.log("Original Text:   " + str);
    console.log("Cipher Text:     " + Cipher);
    console.log("Decrypted Text:  " + plainText);
    console.log("=================================");

}

// Example usage
Caesar_cipher_encryption("Muhammad Nabeel Khan");
