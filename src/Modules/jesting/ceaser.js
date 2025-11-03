
const cipher = function(message, shift){
    
    let ciphered = message.split('').map(letter => shifter(letter, shift));
    return ciphered.join('');
}

const shifter= (letter, shift)=>{
    let newLetter; //= String.fromCharCode(letter.charCodeAt(0) + shift);
    //nonalphabtic
    if(!/[a-zA-Z]/.test(letter)) return letter;
    //uppercase
    if(letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
        if(letter.charCodeAt(0) > 90 - shift){
            newLetter = (letter.charCodeAt(0)% (90 - shift)) +64;
            
        }else{
            newLetter = letter.charCodeAt(0) + shift;
        }

    }
    //lowercase
    if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
        if(letter.charCodeAt(0) > 122 - shift){
            newLetter = (letter.charCodeAt(0)% (122 - shift)) + 96;
            
        }else{
            newLetter = letter.charCodeAt(0) + shift;
        }
    }
    return String.fromCharCode(newLetter);


}
module.exports = cipher;

/*
abcdefgjkhil----shift by 3

defgjkhil-abc
if letter index exceeds 24 - shift factor
then we take the differance and apply shift factor from 1 in the 24
 24 - 4;
 20 but letter is 22
 22 %(24-4) = 2
*/