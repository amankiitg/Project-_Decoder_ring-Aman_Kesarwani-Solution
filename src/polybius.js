// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabets = "abcdefghiklmnopqrstuvwxyz";
    if(encode==true){
      let output = [];
      input = input.toLowerCase();
      input = input.replace("j", "i")
      for (let c of input){
        let index = alphabets.indexOf(c);
        if (index>-1) {
          let row = Math.floor(index/5)+1;
          let col = index%5+1;
            output.push(col.toString()+row.toString());
          } else{
            output.push(c);
        }
      }
      output = output.join("");
      return output;
    }
    else{
      let trimmed_input = input.replace(" ", "");
      if(trimmed_input.length%2!=0) return false;
      output = []
      for (let i=0; i<input.length; i++){
        let ch = input[i];
        if(ch===" "){
          output.push(input[i])
        }
        else{
          let col = parseInt(input[i]);
          i =  i+1;
          let row = parseInt(input[i]);
          let index = (row-1)*5 + col - 1;
          output.push(alphabets[index]);
        }
      }
      output = output.join("");
      output = output.replace("i", "(i/j)");
      return output;
    }
      
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
