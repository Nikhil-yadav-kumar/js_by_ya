// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         let ch=str[i];
//         if(ch == 'a' || ch == 'e' || ch == 'i' ||  ch == 'o' || ch == 'u' ||
//           ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
//             count++;
//           }
          
//     }
//     return count;

// }
// let str="nikhil";
// console.log(countVowels(str));




// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let result = "";

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let firstLetter = word[0].toUpperCase();
//     let remaining = word.slice(1);

//     result += firstLetter + remaining + " ";
//   }

//   return result.trim();
// }
// let sent="this is an apple";
// console.log(capitalizeWords(sent));


// function removeDuplicates(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let found = false;
//     for (let j = 0; j < result.length; j++) {
//       if (str[i] === result[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeDuplicates("niikhhhil"));

function countFrequency(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}
console.log(countFrequency("apple"));



// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;
//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicates([1,2,2,3,3,4,4,4,5]));







