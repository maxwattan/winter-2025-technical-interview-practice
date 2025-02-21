/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  
  //input = string
  //output = number of non repeating characters
  
  //move over the string.
    //check if current letter has been seen?
  
      //if not we add it to our seen collector
      //if yes ...
    //increment our length
    //check out length against max
  //if we see a character that we've seen before
  
  //init an object to collect letters we've seen
  let seen = {}
  //init max length for substring without duplicate
  let maxLength = 0
  //init 
  let start = 0
  
  for(let i = 0; i < s.length; i++) {
    const char = s[i]
    
    //check if current char is in the seen object and the index is greater or equal to start
    if (seen[char] >= start){
      //update the start index to the next index of the character that has been seen
      start = seen[char] + 1
    }
    
    //if it has not been seen add it to seen with the index
    seen[char] = i
    
    // update the maxium length, going to return what ever is greater either (maxLength OR i-start+1) 
    //i is the current index of the string
    //start is the starting index of the current string
    // +1 is used since we started at the 0 index when we looped to get the correct length (inclusive)
    maxLength = Math.max(maxLength, i-start+1)
  }
  
  return maxLength
  
  
}
lengthOfLongestSubstring('abcde')
//brute force 
//check for repeats
//every substring in the array
//check for repeats
//if no repeats 
//check against max length


module.exports = lengthOfLongestSubstring;


//create a function that takes a string and checks if there are any repeated characters in string

// function hasRepeatedCharacters(string){
// //input = string
// //outout = boolean

// // for( let i = 0; i < string .length; i++){
// //   for (let j = i+1; j < string.length; j++){
// //     if (string[i] == string[j]){
// //       return true
// //     } 
// //   }
// //   return false
// // }


// let set = new Set();
// let j = 0;
// let max = 0;
// for(let i = 0; i < s.length; i++){
//     while(set.has(s[i])){
//         set.delete(s[j]);
//         j++;
//     }
//     set.add(s[i]);
//     max = Math.max(max, i - j + 1);
// }
// return max;






// const seen = {} 
// for ( const char of string){
//   if(seen[char]){
//     return false
//   }
//   seen[char] = true
// }
// return false
// }
// console.log(hasRepeatedCharacters("aa"))