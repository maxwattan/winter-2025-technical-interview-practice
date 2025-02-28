const {isAnagrams, isAnagrams2, isAnagrams3} = require("./warmup")

describe("Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.",  () => {
    test("return true if the strings are anagrams and false if not. Ignore spaces.", () => {
        expect(isAnagrams("aba", "baa")).toBe(true);
        expect(isAnagrams("hub", "huc")).toBe(false);
        expect(isAnagrams("aa bb", "a b a b")).toBe(true);
        expect(isAnagrams("ABA", "aba")).toBe(false);
        expect(isAnagrams("aabbb", "baabb")).toBe(true);
        expect(isAnagrams("a&!#bb", "aaabbbb")).toBe(false);
        expect(isAnagrams("a&!#bb", "abb")).toBe(true)
    })

})

describe("Given two strings, return true if the strings are anagrams and false if not. Ignore spaces. Without sort",  () => {
    test("return true if the strings are anagrams and false if not. Ignore spaces. Without sort", () => {
        expect(isAnagrams2("aba", "baa")).toBe(true);
        expect(isAnagrams2("hub", "huc")).toBe(false);
        expect(isAnagrams2("aa bb", "a b a b")).toBe(true);
        expect(isAnagrams2("ABA", "aba")).toBe(false);
        expect(isAnagrams2("aabbb", "baabb")).toBe(true);
        expect(isAnagrams2("a&!#bb", "aaabbbb")).toBe(false);
        expect(isAnagrams2("a&!#bb", "abb")).toBe(true)
    })

})

describe("Given two strings, how many characters would need to be added or replaced in order to make them anagrams",  () => {
    test("how many characters would need to be added or replaced in order to make them anagrams", () => {
        expect(isAnagrams3("abad", "abcd")).toBe(1);
        expect(isAnagrams3("aabb", "baba")).toBe(0);
        expect(isAnagrams3("aaaazzzz", "bbbbwwww")).toBe(8);
        expect(isAnagrams3("aaaazzz", "bbbbwwww")).toBe(null);
    })

})