// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

//input: integer (n) between 3-100
//output: (*) characters depending on how many (n)

function howManyCharacters(n){
let result= ""
// let addingCharacter = "*"

for (let i = 0; i < n; i++){
    result += "*"
    // result += addingCharacter

}
 return result
}

// console.log(howManyCharacters(1))
// console.log(howManyCharacters(2))
// console.log(howManyCharacters(3))
// console.log(howManyCharacters(4))
// console.log(howManyCharacters(5))

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

//input: integer (n) between 3-100
//output: (*) character first and last with spaces in the middle

function spaceInBetween(n) {
    let result = ""
    for (let i = 0; i < n; i++){
        //if statement for first and last character add *
        if (i == 0 || i == n - 1){
            result += "*"
        } else {
            result += " "
        }
    }
     return result
     
    }
    // console.log(spaceInBetween(3))
    // console.log(spaceInBetween(4))
    // console.log(spaceInBetween(5))
    // console.log(spaceInBetween(6))
    // console.log(spaceInBetween(7))

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

//input = two params n(row), m(column). 
//output = The first and last row all have *, inbetween the first and last row the first and last column have * inbetween that have spaces 

function spaceInBetween2(n, m){
// n = row, m = column
//initalize varialble to hold the result
let row = ""
//looping row n
for (let i = 0; i < n; i++){
    //check if it is first or last row
        if(i == 0 || i == n-1){
            //adding * to row m times with repeat function and add \n for a new line
            row += "*".repeat(m)
        } else {
            //adding * with empty space repeating m times - 2 (because the first and last column having *) adding * and \n 
            row += "*" + " ".repeat(m-2) + "*"
    } 
    //adding new line if it is not the last line
    if( i < n-1){
        row += "\n"
    }
    
}
return row
}

// console.log(spaceInBetween2(5,5))


// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.


module.exports = {howManyCharacters, spaceInBetween, spaceInBetween2}; 