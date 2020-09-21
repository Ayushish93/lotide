const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

describe("#countLetters", () => {
    it("should return 6 whne given Ayushi", () =>{
        assertEqual(countLetters("Ayushi"),6);
    });
});