const reverseString = function(text) {

//Transform string into an array with the all the characters using a loop
let splittext = []
for (let i = 0; i < text.length; i++) {
    splittext.push(text[i]);

}
const reversearray = splittext.reverse();
const jointext = reversearray.join('');

//Transform the array back into a newstring by looping inversely

return jointext;
};

// Do not edit below this line
module.exports = reverseString;
