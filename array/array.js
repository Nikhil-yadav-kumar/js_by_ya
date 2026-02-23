// const num=[1,2,3,4,5];
// //  let ansArray=num.map((Number,index)=>{
// //     console.log("number are",Number,"index:",index);
// //  })
// // console.log(num.length)
// // for(let i=0;i<num.length;i++){
// //     console.log(num[i])
// // };
// let i=0;
// do{
//     console.log(num[i])
//     i++;

// }while(i<num.length);

// let arr=[1,2,3,4,5,"nikhil"];
// arr.push('nikhil');
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('nikhil');
// console.log(arr);
// console.log(arr.slice(1,4));
// arr.splice(1,0,'yadav','nikhil');
// console.log(arr);

// let arr=[
//     {name:"nikhil",roll:43,adm:567},
//     {name:"avinash",roll:42,adm:568},
// ];
// let ans= arr.find(data=>data.name === "avinash");
// console.log(ans)

// let arr=[{},{}]
// arr[0].student="nikhil";
// arr[0].roll=23;
// arr[1].student="avinash";
// console.log(arr)

// let arr=[10,5,100,25];
// arr.sort((a,b)=>b-a);
// console.log(arr)


//Date -16/02/2025


// let arr=[2,5,1,6,4];
// let largest=-Infinity;
// let second=-Infinity;
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>second && arr[i]<largest){
//         second=arr[i];
//     }
// } 
// console.log(second)


// //rotate elements lefts by 1
// let arr=[1,3,4,5,7];
// let temp=arr[0];
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i+1];
    
// }
// arr[arr.length-1]=temp;

// console.log(arr);


//rotate rights by 2

// let arr=[1,3,4,5,7,9,8];
// let temp1=arr[arr.length-1];
// let temp2=arr[arr.length-2];

// for(let i=arr.length-3;i>=0;i--){
//     arr[i+2]=arr[i];
    
// }
// arr[0]=temp2;
// arr[1]=temp1;
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let n = arr.length;
// let k = 2;

// for (let i = 0; i < k; i++) {
//     let last = arr[n - 1];
    
//     for (let j = n - 1; j > 0; j--) {
//         arr[j] = arr[j - 1];
//     }
    
//     arr[0] = last;
// }

// console.log(arr);


// function rotate(arr){
//     let n= arr.length
   
//     for(let steps=0;steps<2;steps++){
//         let temp=arr[n-1];
//         for(let i=n-1;i>=0;i--){
//             if(arr[i-1]!=undefined){
//                 arr[i]=arr[i-1]
//             }
//         }
//         arr[0]=temp;
//     }
//     return arr;
// }
// console.log(rotate([2,5,3,8,6,4]))



// let arr=[2,1,2,3,3,4,7];
// let arr1=[];
// let n= arr.length;
// let m= arr1.length;
// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j--){
//         if(arr[i]==arr[j]){
//             arr1.push(arr1[j])
//         }
//     }
// }
// console.log(arr);

// function removeDuplicates(arr){
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//         let isDuplicate=false;
//         for(let j=0;j<arr2.length;j++){
//             if(arr[i]==arr2[j]){
//                 isDuplicate=true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             arr2[arr2.length]=arr[i];
//         }
//     }
//     return arr2;
// }
// console.log(removeDuplicates([2,4,5,2,5,4,4,3,8]));

