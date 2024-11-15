const SECRET_KEY = "your-secret-key";


// Function to encrypt and decrypt using XOR
const xorEncryptDecrypt = (input, key) => {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
};

// export const getID = () => {
//     const encryptedID = localStorage.getItem('userID');
//     if (!encryptedID) return null;

//     const decryptedID = xorEncryptDecrypt(atob(encryptedID), SECRET_KEY);
//     console.log(decryptedID)
//     return parseInt(decryptedID);
// };

// export const setID = (id) => {
//     console.log(id, SECRET_KEY)
//     const encryptedID = xorEncryptDecrypt(String(id), SECRET_KEY);
//     console.log(encryptedID)
//     localStorage.setItem('userID', btoa(encryptedID)); // Use Base64 to encode
// };

// export const removeID = () => {
//     localStorage.removeItem('userID');
// };

export const getID = () => {
    return localStorage.getItem('userID');;
};

export const setID = (id) => {
    localStorage.setItem('userID', id); // Use Base64 to encode
};

export const removeID = () => {
    localStorage.removeItem('userID');
};