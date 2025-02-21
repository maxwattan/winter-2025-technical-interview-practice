const {howManyCharacters, spaceInBetween, spaceInBetween2} = require("./warmup")


describe("Given an integer, n,  between 3 and 100, return a line with n '*' characters" , () => {
    test("should return (1) * character", () => {
        expect(howManyCharacters(1)).toBe("*");
        expect(howManyCharacters(3)).toBe("***")
    })
})

describe("Given an integer, n, between 3 and 100, return a line n characters long where the first and last character are '*' and all the middle characters are a space." , () => {
    test("should return first and last character are '*' and all the middle characters are a space.", () => {
        expect(spaceInBetween(3)).toBe("* *");
        expect(spaceInBetween(5)).toBe("*   *")
    })
})

describe("Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle." , () => {
    test("should return first and last row are '*' and all the middle row had first and last column with '*' with space in the middle.", () => {
        expect(spaceInBetween2(5, 5)).toBe("*****\n*   *\n*   *\n*   *\n*****");
    })
})

