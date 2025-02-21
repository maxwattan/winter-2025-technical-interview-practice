// 1. given a string with three characters, return the second character

function secondChar(str){
return str[1]
}
// console.log(secondChar("abc"))

// 2. get the second and third char from a string. the string will always have atleast three characters

// 'cat' => 'at'
// 'robbed' => 'ob'

function secondThird(str){
    return str.substring(1,3)
}
// console.log(secondThird("apple"))

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter (word){
  return word.slice(1);
}
// console.log(getSecondThroughFifthLetter("apple"))

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

function secondN(str, n){
// return str.slice(1, n)
return str.substring(1, n)
}
// console.log(secondN("schoolbus", 5))
// console.log(secondN('telephone', 6))

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]
function falseArr(arr){
let newArr = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] == false){
        newArr.push(arr[i])
    }
}
return newArr
}
// console.log(falseArr([true, true, false, true , false]))

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

function inputThe(str){
let words = str.split(" ")
if ( words.length == 2){

    return words[0] + " the " + words[1]
}
}

// console.log(inputThe('to beach'))

// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

function discounted(price, discount) {
    return price - discount
}
// console.log(discounted(100, 15))
// console.log(discounted(50, 25))

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.


module.exports = {secondChar, secondThird, getSecondThroughFifthLetter, secondN, falseArr, inputThe, discounted}; 