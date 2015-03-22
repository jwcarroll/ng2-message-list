import * as utils from 'utils';

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function generateRandomWord(min, max){
    var numChars = utils.getRandomInt(min, max),
        chars = [];

    for(var i = 0; i <= numChars; i++){
        var charIndex = utils.getRandomInt(0, alphabet.length);
        chars.push(alphabet[charIndex]);
    }

    return chars.join('');
}

function generateRandomPhrase(minWords, maxWords){
    var numWords = utils.getRandomInt(minWords, maxWords),
        words = [];

    for(var i = 0; i <= numWords; i++){
        words.push(generateRandomWord(4, 10));
    }

    return words.join(' ');
}

export class MessageService {
    generateRandomMessages(numMessages){
        var promise = new Promise(resolve => {
            var messages = this.createMessages(numMessages);

            resolve(messages);
        });

        return promise;
    }

    createMessages(numMessages){
        var messages = [];

        for(var i = 0; i<numMessages; i++){
            messages.push(generateRandomPhrase(1, 5));
        }

        return messages;
    }
}