const {secondChar, secondThird, getSecondThroughFifthLetter, secondN, falseArr, inputThe, discounted} = require("./warmup")

describe("Given a string with three characters, return the second character" , () => {
    test("should return second character", () => {
        expect(secondChar("abc")).toBe("b");
        expect(secondChar("app")).toBe("p");
    })
});

describe("Get the second and third char from a string. the string will always have atleast three characters" , () => {
    test("should return second and third character", () => {
        expect(secondThird("abc")).toBe("bc");
        expect(secondThird("app")).toBe("pp");
    })
});

describe("Given a word with 5 letters, return the second through 5th letter" , () => {
    test("should return second through fifth character", () => {
        expect(getSecondThroughFifthLetter("abcde")).toBe("bcde");
        expect(getSecondThroughFifthLetter("apple")).toBe("pple");
    })
});

describe("Given a string and a number called N, return the second through the Nth character" , () => {
    test("should return second character through N character", () => {
        expect(secondN("schoolbus", 5)).toBe("choo");
        expect(secondN("telephone", 6)).toBe("eleph");
    })
});

describe("Given an array of booleans, return an arrray of only false elements" , () => {
    test("should return array of only false elements", () => {
        expect(falseArr([true, true, false, true , false])).toStrictEqual([false, false]);
        expect(falseArr([true, true, false, true , false, false])).toStrictEqual([false, false, false]);
    })
});

describe("given a string with two words, put ' the ' between the words and return the string" , () => {
    test("should return the string with ' the ' between the words ", () => {
        expect(inputThe('to beach')).toBe('to the beach');
        expect(inputThe('for real')).toBe('for the real');
    })
});

describe("given two numbers, price and discount, return the price after the discount is applied" , () => {
    test("should return the price after the discount is applied", () => {
        expect(discounted(100, 15)).toBe(85);
        expect(discounted(50, 25)).toBe(25);
    })
});