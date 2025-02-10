/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // input => string 
  // output => if the characters reads same foward and backwards return true else return false

  //initialize variable and set it to the last element

  let j = str.length-1;
//string length goes half way
  for (let i=0; i < str.length/2; i++){
    //check first and last then loop to the next if true
    if (str[i] !== str[j]) {
      return false
    } 
  //move on to the next element
    j--
     //if all matches return true
      return true
    }
  }
  console.log(isPalindrome("mom"))
  console.log(isPalindrome("pop"))
  console.log(isPalindrome("121"))
  console.log(isPalindrome("123"))
  console.log(isPalindrome("!.!"))
  console.log(isPalindrome(" . "))



module.exports = isPalindrome;
