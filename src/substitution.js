// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false;
    
    let unique = alphabet.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
    
    if(unique.length < 26) return false;    
    
    let originalAlphabets = "abcdefghijklmnopqrstuvwxyz";
    
    if (encode===false){
      originalAlphabets = alphabet;
      alphabet = "abcdefghijklmnopqrstuvwxyz";
    }
    
    let output = [];
    input = input.toLowerCase();
    for (let c of input){
      let index = originalAlphabets.indexOf(c);
      if (index>-1) {
          output.push(alphabet[index]);
        } else{
          output.push(c);
      }
    }
    output = output.join("");
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
