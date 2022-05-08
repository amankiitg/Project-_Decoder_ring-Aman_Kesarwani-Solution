// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift > 25 || shift===0 || shift < -25) {return false;}
    
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    if (encode===false) shift = -1*shift;
    let output = [];
    input = input.toLowerCase();
    for (let c of input){
      let index = alphabets.indexOf(c);
      if (index>-1) {
          output.push(alphabets[(index+shift+26)%26]);
        } else{
          output.push(c);
      }
    }
    output = output.join("");
    return output;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
