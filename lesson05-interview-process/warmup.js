function reverseString(str) {
    //initalize variable for the new string that will hold the reverse string
    let newString = ""
    //loop through the string in reverse 
    for(let i = str.length-1; i >= 0; i--){
        //add it to the new string
        newString += str[i]
    }
    //return the new string
    return newString
    
    //return str.split("").reverse().join("")
}

// console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
//input: "hello, world!"
//output: 'Hello, World!'
// console.log(str)
//initialize variable to split string into each word at every space
let newString = str.split(" ")
// console.log(newString)
//loop through each word in the split string and capitalize the first character in each word, then set the new string to the concat the rest of the letters of the string after the first character by using splice and the argument after the character 0 which is 1
for ( let i = 0; i < newString.length; i++){
    // console.log(newString[i])
    // console.log(newString[i].charAt(0).toUpperCase())
    // console.log(newString[i].slice(1))
   newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1)
    // console.log(newString[i])
}
//since the split method was used then we have to join
// console.log(newString.join(" "))
return newString.join(" ")
}
console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    console.log(str)
//input: string hello
//output: count of vowel

// initialize count
let count = 0
let vowel = ["a", "e", "i", "o", "u"]

//loop through the parameter in this case str
for ( let i = 0; i < str.length; i++){
    //check if statement that if that iteration is equal to a vowel then accumulate
    // console.log(str[i])
    if(vowel.includes(str[i])){
        count++
    }
}

//return count
return count
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
