// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  
  describe("encoding a message", () => {
      
      it("should encode a message by translating each letter to number pairs", () => {
        const expected = "4432423352125413";
        const actual = polybiusModule.polybius("thinkful");
        expect(actual).to.equal(expected);
      });
      
      it("should translate both 'i' and 'j' to 42", () => {
        const actualWithI = polybiusModule.polybius("thinkful");
        const actualWithJ = polybiusModule.polybius("thjnkful");
        expect(actualWithJ).to.equal(actualWithI);
      });
    
      it("should ignore capital letters", () => {
        const expected = "4432423352125413";
        const actualWithCap = polybiusModule.polybius("ThinKful");
        const actualWithoutCap = polybiusModule.polybius("thinkful");
        expect(actualWithCap).to.equal(expected);
        expect(actualWithoutCap).to.equal(expected);
      });
      
      it("should maintain spaces in the message", () => {
        const expected = '3251131343 2543241341';
        const actual = polybiusModule.polybius("Hello world");
        expect(actual).to.equal(expected);
      });
    
   });
  
  describe("decoding a message", () => {
      
      it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "hello";
        const actual = polybiusModule.polybius("3251131343", false);
        expect(actual).to.equal(expected);
      });
      
      it("should translate 42 to both 'i' and 'j'", () => {
        const expected = "th(i/j)nkful";
        const actual = polybiusModule.polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
      });
      
      it("should maintain spaces in the message", () => {
        const expected = "hello world";
        const actual = polybiusModule.polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
      });
    
     it("should return false if the length of all numbers is odd", () => {
        const expected = false;
        const actual = polybiusModule.polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
      });
      
   });
  
});
