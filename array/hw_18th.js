// function WordWithMaxVowels(str) {
//     let maxVowel = 0;
//     let wordwithMaxVowel = "";
//     let currentWord = "";
//     let i, j;

//     for (i = 0; i <= str.length; i++) {

//         if (str[i] == " " || i == str.length) {

//             let vowelCount = 0;

//             for (j = 0; j < currentWord.length; j++) {
//             let ch = currentWord[j];

//                 if (ch == 'a' || ch == 'e' || ch == 'i' || 
//                     ch == 'o' || ch == 'u' ||
//                     ch == 'A' || ch == 'E' || 
//                     ch == 'I' || ch == 'O' || ch == 'U') {

//                     vowelCount++;
//                 }
//             }

//             if (vowelCount > maxVowel) {
//                 maxVowel = vowelCount;
//                 wordwithMaxVowel= currentWord;
//             }

//             currentWord = "";

//         } else {
//             currentWord = currentWord + str[i];
//         }
//     }

//     return wordwithMaxVowel;
// }
// var sentence="nikhil kumar yadavaa";
// console.log(WordWithMaxVowels(sentence));



// function secondLongestWord(str) {

//     let words = str.split(" ");

//     let first = "";
//     let second = "";

//     for (let i = 0; i < words.length; i++) {

//         if (words[i].length > first.length) {
//             second = first;
//             first = words[i];

//         } else if (
//             words[i].length > second.length &&
//             words[i].length < first.length
//         ) {
//             second = words[i];
//         }
//     }

//     return second;
// }

// console.log(secondLongestWord("Nikhil Yadav is Team Player"));

// function haveSameWords(sentence1, sentence2) {
//   let words1 = sentence1.split(" ");
//   let words2 = sentence2.split(" ");
//   if (words1.length !== words2.length) {
//     return false;
//   }
//   let freq = {};
//   for (let word of words1) {
//     if (freq[word]) {
//       freq[word]++;
//     } else {
//       freq[word] = 1;
//     }
//   }
//   for (let word of words2) {
//     if (!freq[word]) {
//       return false; 
//     }
//     freq[word]--;
//   }return true;
// }
// let str1="apple banana apple";
// let str2="banana apple banana";
// console.log(haveSameWords(str1,str2));



// function countWords(sentence){
//   let words = sentence.trim().split(/\s+/);
//   let count = {};

//   for(let word of words){
//     if(count[word]){
//       count[word]++;
//     }
//     else{
//       count[word] = 1;
//     }
//   }
//   return count;
// }

// let str = "you are good good good";
// console.log(countWords(str));




