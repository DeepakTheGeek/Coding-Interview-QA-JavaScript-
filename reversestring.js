// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    var reversedstr = "";

    for (let i = 0; i < str.length; i++) {
        reversedstr = str[i] + reversedstr;
    }
    return reversedstr;
}

module.exports = reverse;

// function reverse(str) {
//     // let arr = str.split('');
//     // arr.reverse();
//     // return arr.join('');
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

