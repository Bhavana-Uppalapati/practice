// let a;
// var x= Math.floor(Math.random() * 100) + 1;
// console.log(x);
// let score=1;
// while(a!==x){
//      a=Number(prompt("Enter a number"))

//     if(a===x){
//         console.log("You guessed correct number in" + score + "chances")

//         }
//     else if(a>x && a<100){
//         console.log("You entered larger number")

//     }else if(a<x && a<100){
//         console.log("You entered smaller number")
//     }
//     else{
//         console.log("Enter number between 1 to 100")
//     }
//    score++
// }

// let a = Number(prompt("Enter age"))
// if(a>=18){
//     alert("you can drive")
// } else{
//     alert("you can not drive")
// }
// confirm("do you want to see the prompt again")
// let a=[1,2,2,3]
// console.log( a.findLast(2))



// 1) Take array of numbers, return the sum of individual digits in the every number in number format
// input: [21,45,34,441]
// // output: 3979
// let arr = [21, 45, 345, 4417];
// let output = "";
// for (ele of arr) {
//   let sum = 0;
//   while (ele > 0) {
//     let rem = ele % 10;
//     sum += rem;
//     ele = Math.floor(ele / 10);
//   }
//   output += sum;
// }
// console.log(output);
// 2) Take an array of numbers, return the digits in the number only once, if they are repetead.// input: [232,111,4688]// output: 231468
// let a = [232, 4111, 4688];
// let output1 = "";
// for (ele of a) {
//   let str = ele.toString();
//   for (i = 0; i < str.length; i++) {
//     let flag = true;
//     for (j = 0; j < i; j++) {
//       if (str[i] === str[j]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       output1 += str[i];
//     }
//   }
// }
// console.log(output);
// 1) if 0's are more than 1's in a number then return 1 otherwise return 0
// [101,200,10211]
// ouput: 101
// let output = ""
// let a=[101,200,10211]
// for(i of a){
//    str = i.toString()
//    let oc1 = 0
//    let oc0= 0
//    for(char of str){
//        if(char == 1){
//            oc1++
//        }
//        else if(char == 0){
//            oc0++
//        }
       
//    }
//     if(oc1>oc0){
//        output += 1
//    }
//    else {
//        output += 0
//    }
// }
// console.log(output)

//// 2) input: [[2,4,5],[12,4,5],[1,0],[7,4,3,3]]
// output: 5413
// let a = [[2,4,5,10],[12,4,1,5],[1,0,3],[7,4,2,3,3]]
// let str = ""
// for(i=0;i<a.length;i++){
  
//     if(i%2===0){
//          max=a[i][0];
//         for(j=1;j<a[i].length;j++){
//             if(a[i][j]>max){
//                 max = a[i][j]
//             }
//         }
//         str+=max
        
//     }
//     else{
//         min=a[i][0]; 
//         for(k=1;k<a[i].length;k++){
//             if(a[i][k]<min){
//                 min = a[i][k]
//             }
//         }
//        str += min
//     }
// }
// console.log(str)

// let result = ""
// let a =[101, 11, 130,1901]
// for(ele of a){
//     let str = ele.toString()
//     one=0
//     zero=0
//     for(char of str){
//         if(char==1){
//             one++
//         }
//         else if(char==0){
//             zero++
//         }
//     }
//     if(one>zero){
//         result += 1
//     }
//     else if(one==zero){
//         result += ""
//     }
//     else{
//         result += 0
//     }
// }
// console.log(result)
// var arr= [2,3,4,5]
// function add(a,b,...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
 
  
// }
// add(...arr)
// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [6, 7, 8, 9];

// //[1,2,3,4,5,6,7,8,9]

// let arr3 = [...arr1, ...arr2];

// console.log(arr3);
// let [val1,val2,val3,...valrest]=arr3
// console.log(val1)
// console.log(valrest)

const p = new Promise ((num1,num2)=>{
    let a=5;
    if(a==10){
      num1("promise is resolved")
    }
    else{
      num2("promise is rejected")
    }
})
p.then((res)=>{
  console.log(res)
})
p.catch((err)=>{
     console.log(err)
})
console.log(p)
