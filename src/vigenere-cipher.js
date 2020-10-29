class VigenereCipheringMachine {

    constructor(right) {
        this.right = right;
    }

    encrypt(message, key) {

        if (typeof message === 'undefined' || typeof key === 'undefined') {
            throw new Error();
        }

        const uppercaseMessage = message.toUpperCase();
        const uppercaseKey = key.toUpperCase();
        let result = '';
        let keyCount = 0;

        for (let i = 0; i < uppercaseMessage.length; i++) {

            if (uppercaseMessage[i].charCodeAt(0) < 65 || uppercaseMessage[i].charCodeAt(0) > 91) {
                result += uppercaseMessage[i];
                continue;
            }

            let keyI = keyCount % uppercaseKey.length;
            keyCount++;

            result += String.fromCharCode((((uppercaseMessage[i].charCodeAt(0) - 65) + (uppercaseKey[keyI].charCodeAt(0) - 65)) % 26) + 65);
        }

        if (this.right === false) {
            return result.split('').reverse().join('');
        }

        return result;

    }

    decrypt(encryptedMessage, key) {

        if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
            throw new Error();
        }

        const uppercaseMessage = encryptedMessage.toUpperCase();
        const uppercaseKey = key.toUpperCase();
        let result = '';
        let keyCount = 0;


        for (let i = 0; i < uppercaseMessage.length; i++) {

            if (uppercaseMessage[i].charCodeAt(0) < 65 || uppercaseMessage[i].charCodeAt(0) > 91) {
                result += uppercaseMessage[i];
                continue;
            }

            let keyI = keyCount % uppercaseKey.length;
            keyCount++;

            result += String.fromCharCode((((uppercaseMessage[i].charCodeAt(0) - 65) + 26 - (uppercaseKey[keyI].charCodeAt(0) - 65)) % 26) + 65);
        }

        if (this.right === false) {
            return result.split('').reverse().join('');
        }

        return result;

    }
}

module.exports = VigenereCipheringMachine;
