const repeatString = function(string,num) {

if (num >= 0) {


  let myst = '';
    for (let i = 0; i < num; i++) {
      myst = myst + string;
    }
    return myst;
  }
 else {
   return 'ERROR';
 }
      };

// Do not edit below this line
module.exports = repeatString;
