// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  
  describe("error handling", () => {
      
      it("should return false if the substitution alphabet is missing", () => {
          const actual = substitutionModule.substitution("thinkful");
          expect(actual).to.equal(false);
      });
    
      it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitutionModule.substitution("thinkful", "short");
        expect(actual).to.equal(false);
      });

      it("should return false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(false);
      });
      
   });
  
  describe("encoding a message", () => {
      
      it("correctly translates the given phrase, based on the alphabet given to the function", () => {
        const expected = 'jrufscpw';
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
      });
      
      it("should work with any kind of key with unique characters", () => {
        const expected = "y&ii$r&";
        const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
      });
    
    it("should ignore capital letters", () => {
        const expected = "y&ii$r&";
        const actualWithCap = substitutionModule.substitution("MeSSage", "$wae&zrdxtfcygvuhbijnokmpl");
        const actualWithoutCap = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actualWithCap).to.equal(expected);
        expect(actualWithoutCap).to.equal(expected);
      });
      
      it("should maintain spaces in the message", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
      });
      
   });
  
  describe("decoding a message", () => {
      
      it("should decode a message by using the given substitution alphabet", () => {
        const expected = "thinkful";
        const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
      });
      
      it("should work with any kind of key with unique characters", () => {
        const expected = "message";
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
      });
      
      it("should maintain spaces in the message", () => {
        const expected = "you are an excellent spy";
        const actual = substitutionModule.substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
      });
   });
  
});
