const {howManyCharacters, spaceInBetween} = require("./warmup")


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

