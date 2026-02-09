// //Q1
// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };
// let total =0;
// for(let sub in marks){
//     total+=marks[sub];
// }
// console.log(total);


// //Q2
// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };
// let highest_marks=0;
// for(let sub in marks){
//     if(marks[sub]>highest_marks){
//         highest_marks=marks[sub];
//     }
// }
// console.log(highest_marks)

// //Q3
// let value={
//     a:2,
//     b:3

// }
// for(let val in value){
//     value[val]=value[val]*2;
// }
// console.log(value);

// //Q4
// let user={
//     profile:{
//         address:'mohali'
//     }
// };
// let exist=("city" in user.profile);
// let value=exist;
// if(value==true){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }

//Q7
let val={
    a:10,
    b:{
        x:5, 
        y:15
    }
}
let total=0;
for(let value in val){
    if(val[value]==="number"){
        total+=val[value];

    }
}
console.log(total)
