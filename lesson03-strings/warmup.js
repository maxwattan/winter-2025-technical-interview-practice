// 1. Given two strings, return true if the strings are anagrams and false if not. Ignore spaces.

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function isAnagrams(str1, str2) {
  //ignore spaces so we have to remove it
  str1 = str1
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort()
    .join("");
  str2 = str2
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .sort()
    .join("");
  //check if the length the same
  if (str1.length !== str2.length) {
    return false;
  }
  //turn strng into array sort then join due to strings are inmutable
  //check if it matches
  // str1 = str1.split("").sort().join("")
  // str2 = str2.split("").sort().join("")
  // console.log("str1", str1)
  // console.log("str2", str2)
  return str1 === str2;
}

// 2. Solve the same problem as above but do not sort the strings. What is the difference in time complexity when we don't sort the strings?

// "aba", "baa" => true
// "hub", "huc" => false
// "aa bb", "a b a b" => true
// "ABA", "aba" => false
//  "aabbb", "baabb" => true
// "a&!#bb", "aaabbbb" => false
//  "a&!#bb", "abb" => true

function isAnagrams2(str1, str2) {
  //ignore spaces and special char
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  str2 = str2.replace(/[^a-zA-Z]/g, "");

  //initalize object to store char for str1 and str2

  let char1 = {};
  let char2 = {};

  //loop through each string, if we do not put || 0 it will be undefined because the property does not exist

  for (let i = 0; i < str1.length; i++) {
    char1[str1[i]] = (char1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    char2[str2[i]] = (char2[str2[i]] || 0) + 1;
  }

  //compare the char
  for (let char in char1) {
    if (char1[char] !== char2[char]) {
      return false;
    }
  }

  return true;
}

// 3. Given two strings, how many characters would need to be added or replacedin order to make them anagrams

// "abad", "abcd" => 1
//  "aabb", "baba" => 0
// "aaaazzzz", "bbbbwwww" => 8

function isAnagrams3(str1, str2) {
  //create object to store chracter and count for string one and two
  let char1 = {};
  let char2 = {};

  if (str1.length != str2.length) {
    return null;
  }
  //loop through each string
  for (let i = 0; i < str1.length; i++) {
    char1[str1[i]] = (char1[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    char2[str2[i]] = (char2[str2[i]] || 0) + 1;
  }
  // console.log(char1)
  // console.log(char2)

  //initialize counter to keep track of how many characters need to be added or replaced
  let count = 0;
  //loop through the first object
  // "abad", "abcd" => 1
  // "a", "c" => 1 and 1

  for (const char in char1) {
    if (char2[char]) {
      // console.log("key", char)
      // console.log("value", char1[char])
      count += char1[char] - char2[char];
    } else {
      count += char1[char];
    }
  }
  for (const char in char2) {
    if (!char1[char]) {
      count += char2[char];
    }
  }
  return count / 2;
}

module.exports = { isAnagrams, isAnagrams2, isAnagrams3 };
