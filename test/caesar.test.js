// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  
  describe("error handling", () => {
      
      it("should return false if the shift value isn't present", () => {
          const actual = caesarModule.caesar("thinkful");
          expect(actual).to.equal(false);
      });
    
      it("should return false if the shift amount is 0", () => {
        const actual = caesarModule.caesar("thinkful", 0);
        expect(actual).to.equal(false);
      });

      it("should return false if the shift amount is above 25", () => {
        const actual = caesarModule.caesar("thinkful", 99);
        expect(actual).to.equal(false);
      });

      it("should return false if the shift amount is less than -25", () => {
        const actual = caesarModule.caesar("thinkful", -26);
        expect(actual).to.equal(false);
      });
      
   });
  
  describe("encoding a message", () => {
      
      it("should encode a message by shifting the letters", () => {
        const expected = 'wklqnixo';
        const actual = caesarModule.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
      });
      
      it("should maintain spaces and other nonalphabetic symbols in the message", () => {
        const expected = 'wklq $nixo';
        const actual = caesarModule.caesar("thin $kful", 3);
        expect(actual).to.equal(expected);
      });
      
      it("should ignore capital letters", () => {
        const expected = 'wklqnixo';
        const actualWithCap = caesarModule.caesar("ThinKful", 3);
        const actualWithoutCap = caesarModule.caesar("thinkful", 3);
        expect(actualWithCap).to.equal(expected);
        expect(actualWithoutCap).to.equal(expected);
      });
    
    it("should handle shifts that go past the end of the alphabet", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesarModule.caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
      });
      
      it("should allow for a negative shift that will shift to the left", () => {
        const expected =  'qefkhcri';
        const actual = caesarModule.caesar("thinkful", -3);
        expect(actual).to.equal(expected);
      });
      
   });
  
  describe("decoding a message", () => {
      
      it("should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "thinkful";
        const actual = caesarModule.caesar('wklqnixo', 3, false);
        expect(actual).to.equal(expected);
      });
      
      it("should maintain spaces and other nonalphabetic symbols in the message", () => {
        const expected = "thin $kful";
        const actual = caesarModule.caesar('wklq $nixo', 3, false);
        expect(actual).to.equal(expected);
      });
      
      it("should ignore capital letters", () => {
        const expected = "thinkful";
        const actualWithCap = caesarModule.caesar('wklQniXo', 3, false);
        const actualWithoutCap = caesarModule.caesar('wklqnixo', 3, false);
        expect(actualWithCap).to.equal(expected);
        expect(actualWithoutCap).to.equal(expected);
      });
    
    it("should appropriately handle letters at the end of the alphabet", () => {
        const expected = 'this is a secret message!';
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
      });
      
      it("should allow for a negative shift that will shift to the left", () => {
        const expected = "thinkful";
        const actual = caesarModule.caesar('wklqnixo', -3);
        expect(actual).to.equal(expected);
      });
      
   });
  
});
