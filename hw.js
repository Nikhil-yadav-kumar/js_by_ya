// //Q1
// function CheckEven(num){
//     if(num%2==0){
//         console.log(num,"is even");
//     }
//     else{
//         console.log(num,"is odd")
//     }
// }
// CheckEven(7);
// CheckEven(8);

// //Q2
// function MaxNum(a,b){
//     if(a>b){
//         console.log(a,"is greater");
//     }
//     else{
//         console.log(b,"is greater");
//     }
// }
// MaxNum(345,675);

// //Q3
// function FindLarger(a,b,c){
//     if(a>b && a>c){
//         console.log(a,"is larger");
//     }
//     else if(b>a && b>c){
//         console.log(b,"is larger");
//     }
//     else{
//         console.log(c,"is larger");
//     }
// }

// FindLarger(34,56,91);
// FindLarger(54,76,41);

// //Q4
// function printSum(n){
//     let sum=0;
//     let i=1;
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     console.log("sum is",sum)
// }
// printSum(4);

// //Q5
// function fact(num){
//     let fact=1;
//     if(num===0 && num===1){
//         console.log("factorial is",1)
//     }
//     else{
//         for(let i=1;i<=num;i++){
//             fact=fact*i;
//         }
//         console.log("factorial of",num,"is",fact);
//     }
// }
// fact(5);


// //Q6
// function Reverse(num){
//     let reversed=0;
//     while(num!==0){
//         let digit=num%10;
//         reversed=reversed*10+digit;
//         num=(num-digit)/10;
//     }
//     console.log("the reverse is",reversed)

// }
// Reverse(1234);

// //Q10
// function Multiples(num){
//     if(num%5===0 && num%3===0){
//         console.log("FizzBuzz");
//     }
//     else if(num%5===0){
//         console.log("buzz")
//     }
//     else if(num%3===0){
//         console.log("fizz");
//     }
//     else{
//         console.log("neither by 3 nor by 5")
//     }
// }
// Multiples(31);

// //Q8
// function PrimeCheck(num){
//     if (num <=1){
//         return false;
//     }
//     else if (num%2==0){
//         return true;
//     }
//     else{
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 return true;
//             }
//             return false;
//         }
//     }
// }
// let ans=PrimeCheck(79003);
// console.log(ans);


// //Q for loop print
// function star(n){ 
//    for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }
// }
// star(5);

// //Q7
// function Palindrome(num){
//     let reversed=0;
//     let temp=num;
//     while(num!==0){
//         let digit=num%10;
//         reversed=reversed*10+digit;
//         num=(num-digit)/10;
//     }
//     if(temp===reversed){
//         console.log("the number is palindrome");
//     }
//     else{
//         console.log("the number is not palindrome");
//     }
// }
// Palindrome(12321);

// //Q9
// function countDigits(num){
//     num=Math.abs(num);
//     if(num===0){
//        return 1;
//     }
//     else {    
//     let count=0;
//     while(num!==0){
//         let digit=num%10;
//         num=(num-digit)/10;
//         count++;
//     }
//     console.log(count);
//     }
// }
// countDigits(6);


// //Q11
// function countVowels(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if (
//             ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
//             ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
//         ) {
//             count++;
//         }
//     }

//     console.log("vowels are",count);
// }
// countVowels("Nikhil");


// //Q12
// function reverseString(str){
//     let reversed="";
//     for(i=str.length-1;i>=0;i--){
//         reversed+=str[i];
//     }
//     console.log(reversed);
// }
// reverseString("Nikhil");

// //sum
// function printSum(num){
//     let sum=0;
//     let num1=num;
//     while(num!==0){
//         let digit=num%10;
//         sum+=digit;
//         num=(num-digit)/10;
//     }
//     console.log("sum of",num1,"is",sum);
// }
// printSum(12234);


// //product
// function printProduct(num){
//     if(num==0){
//         console.log(0);
//     }
//     else{
//         let product=1;
//         while(num!==0){
//         let digit=num%10;
//         product*=digit;
//         num=(num-digit)/10;
//     }
//     console.log("product is",product);
//     }  
// }
// printProduct(2345);

// //Hcf
// function hcf(a,b){
//     while(b!==0){
//         let temp =b;
//         b=a%b;
//         a=temp;
//     }
//     console.log(a)
// }
// hcf(18,12);

// //occurence
// function countDigit(num, digit) {
//     num=Math.abs(num)
//     let count = 0;
//     while (num > 0) {
//         let rem = num % 10;

//         if (rem === digit) {
//             count++;
//         }
//         num = (num-rem)/10;
//     }
//     console.log(count);
// }
// countDigit(5687645,6);

// //temperature
// function Temperature(value, unit) {
//     if (unit === "c") {
//         let ans=(value * 9 / 5) + 32;
//         console.log(ans,"f")
//     } else if (unit === "f") {
//         let ans=(value - 32) * 5 / 9;
//         console.log(ans,"c");
//     } else {
//         return "Invalid unit! Use 'C' or 'F'";
//     }
// }
// Temperature(225, "f"); 
// Temperature(77, "c"); 

// //even and odd count
// function countEvenOdd(num) {
//     let even = 0;
//     let odd = 0;

//     while (num > 0) {
//         let rem = num % 10;

//         if (rem % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//         num = (num-rem) / 10;
//     }
//     console.log("even are",even);
//     console.log("odds are",odd);
// }
// countEvenOdd(23456);


// function isArmstrong(num) {
//     let temp = num;
//     let digits = 0;

//     // Count number of digits
//     while (temp > 0) {
//         digits++;
//         temp = (temp - (temp % 10)) / 10;
//     }

//     temp = num;
//     let sum = 0;

//     // Calculate Armstrong sum
//     while (temp > 0) {
//         let digit = temp % 10;
//         let power = 1;

//         // digit^digits without Math.pow
//         for (let i = 0; i < digits; i++) {
//             power *= digit;
//         }

//         sum += power;
//         temp = (temp - digit) / 10;
//     }

//     return sum === num;
// }

// Q1.
function Divisorscount(num){
    if(num==0){
       return 0;
    }
    else{
       let divisors=0;
       for(let i=1;i<=num;i++){
            if(num%i===0){
            divisors++;
            }
        }
        return divisors;
    }
    
}
console.log("no. of divisors are:",Divisorscount(15));


// // Q2.
// function Fibonacci(num){
//     let num1=0;
//     let num2=1;
//     let sum;
// if(num===1){
//  return num1;
// }
// else if(num===2){
// return num2;
// }
// else{
// for(let i=3;i<=num;i++){
//     sum =num1+num2;
//     num1=num2;
//     num2=sum;
// }
// console.log(num2)
// }
// }
// Console.log("terms are",Fibonacci(7));

// // Q4.
// function diff_evenandodd(num){
// let digits=0;
// let diff;
// let odd_sum=0
// let even_sum=0;
// while(num!==0){
// digits++;
// let rem=num%10;
// if(digits%2==0){
// even_sum+=rem;
// }
// else{
// odd_sum+=rem;
// }
// num=(num-rem)/10;
// }
// diff=even_sum-odd_sum;
// return diff;
// }
// console.log(diff_evenandodd(23456));

// // Q5.
// Function issumprime(num){
// Let rem=0;
// Let sum=0;
// While(n!==0){
// rem=rem%10;
// num=(num-rem)/10;
// sum+=rem;}
// for (let i=0;i<n/2;i++){
// if(sum%i==0){}
// console.log(“sum of digir is not prime”);}
// else{
// console.log(“prime”)}}
// issumprime(345)
