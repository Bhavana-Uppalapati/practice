//1.Create a function that takes two numbers as arguments and returns their sum.

// function sum(a,b){

//     result=a+b;
//     return result;
// }
// console.log(sum(7,9));

//2.Write a function that takes an integer minutes and converts it to seconds.
// function Seconds(){
//       let min=Number(prompt("Enter minutes you want to convert into seconds"));
//       sec=min*60;
//       return sec;

// }
// console.log(Seconds());

//3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function increment(i){
//           inc=i++
//           return i;
// }
// console.log(increment(5));

//4.Create a function that takes the age in years and returns the age in days.
// function age(){
//     let Age=Number(prompt("Enter age in years"))
//     age_in_days= Age*365;
//     return age_in_days;
// }
// console.log(age());

//5.Create a function that takes voltage and current and returns the calculated power.
// let power=function (){
//     let v=Number(prompt("Enter the voltage"))
//     let I=Number(prompt("Enter current"))
//     pow=v*I;
//     return pow
// }
// console.log(power());

//6.Write a function that returns the string "something" joined with a space " " and the given argument a.
// let string=function(a){
//          console.log("something " +a)
// }
// string("amazing");

//7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// let T=function(c,d){
//        if(c===10 || d===10 || c+d===10){
//         return true;
//        }
//        else{
//         return false
//        }
// }
// console.log(T(5,9));

//8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// let TorF=function(){
//     let s1=prompt("Enter string 1")
//     let s2=prompt("Enter string 2")
//     if(s1.length===s2.length){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(TorF());

//9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// let name=prompt("enter a name");
// const greet=(a)=>{
//    console.log("hi "+a);
// }
// greet(name)
//other method
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let a = Number(prompt(`Enter the ${i + 1}th element in the array:`));
//     arr.push(a);
// }

// let str = arr.join('');

// let modStr = "(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6);

// console.log(modStr);


//10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555)
// let phone=[9,6,7,8,2,4,5,6,7,0]

// function num(number){
//     format=`(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}${phone[8]}${phone[9]}`;
//     return format;
// }
// console.log(num(phone))

//11.Create a function that returns an array of strings sorted by length in ascending order.
// let arr=["abc","cd","c"]
// function asc(p){
//     const asco= arr.sort(function(a,b){
//         return a.length-b.length
//     });
//     return asco;
// }
// console.log(asc(arr))

//without using methods
// let a=["a", "ccc", "dddd","bb"];
// function insertion(arr){
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i].length>arr[j].length){
//             let temp=arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp;
//         }
//     }
// }
// return arr;
// }
// console.log(insertion(a))

//12.Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// let arr1=[[0,9,5],[45,65,78,678],[67,34,567]]
// const result=[]
// // console.log(arr1[1][0])
// function largeNumber(A){
// for(i=0;i<arr1.length;i++){
//     let LN=arr1[i][0];
//     for(j=1;j<arr1[i].length;j++){
//         if(arr1[i][j]>LN){
//             LN=arr1[i][j];
//         }
//     }
//     result[i]=LN;
// }
// return result;
// }
// console.log(largeNumber(arr1))

//13.find second largest number in the arraay
let a1 = Number(prompt("Enter size of array"));
let arr6 = [];
let temp = [];
for (i = 0; i < a1; i++) {
  arr6[i] = Number(prompt("Enter element" + i + ":"));
}
function SL(a1) {
  for (i = 0; i < a1; i++) {
    for (j = i + 1; j < a1; j++) {
      if (arr6[i] < arr6[j]) {
        temp = arr6[i];
        arr6[i] = arr6[j];
        arr6[j] = temp;
      }
    }
  }
  return arr6[1];
}

console.log(SL(a1));

//14. remove duplicates from array
// let a = [1,0,1,0];
// let b =[a[0]];
// // b.push(a[0]);

// for(let i = 0; i < a.length; i++)
// {
//     var found = false; 
//     for(j = 0; j < b.length; j++ )
//     {
//         if(a[i]===b[j])
//         {
//             found = true;
//             break;
//         }
        
//     }
//     if(found==false)
//     {
//         b.push(a[i]);
//     }
// }
// console.log(b)

//15.print unique value
//let a = [2,2,2,4,5,5,5,9,7,7];

// for(let i = 0; i < a.length; i++)
// {
//     let count = 0;
//     for(let j = 0; j < a.length; j++)
//     {
//         if(a[i] === a[j])
//         {
//             count++
//         }

        
//     }
//     if(count == 1)
//     {
//         console.log(a[i])
//     }
// }

//another method
// let arr = [54,56,42,62,18,59];

// var larger = arr[0];
// var sec_large = Number.MIN_SAFE_INTEGER;

// for(let i = 1; i < arr.length; i++)
// {
//     if(arr[i] > larger)  //  59 > 62
//     {// x
//         sec_large = larger; // 56
//         larger = arr[i];   //  62
        
//     }
    
//     else if((arr[i] > sec_large) && (arr[i] !== larger || arr[i] == larger))
//     // 42 > 54 && ( 42 !== 56  || 42 == 56 )
//     {
//         sec_large = arr[i];
//     }
    
// }
// console.log(sec_large);

//16.
// let char=prompt("enter a character")
// let str=prompt("Enter a string")
// function num_of_occ(a,b){
//     let count=0;
//     for(i=0;i<b.length;i++){
//         if(a===b[i]){
//             count++;
         
//         }
//     }
//        return count;
// }
// console.log(num_of_occ(char,str));



//17.Create a function that takes a string and returns the number (count) of vowels contained within it.

// function vowelCount(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// let str1 = prompt("Enter a string");
// console.log(vowelCount(str1));

//18.// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// let str=prompt("Enter a string")
// let output=""
// let small= /[a-z]/

// let cap = /[A-Z]/
// for(i=0;i<str.length;i++){
//      if (small.test(str[i])){
//          output += str[i].toUpperCase();
//      }
//      else{
//         output+= str[i].toLowerCase();
//      }
// }
// console.log(output)

// bubble sort
// let a=[10,5,6,11,1];
// let l=a.length;
// for(let i=0;i<l-1;i++){
//     let flag=0;
//     for(let j=0;j<l-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             flag=1;
//         }
//     }
//     if(flag===0){
//         break;
//     }
// }
// console.log(a[0])

//19. Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// 			Input:      n=5
// 			Output:   2 4 6 8 10

// let n=Number(prompt("enter the value"));
// function multiples(a){
//     for(let i=1;i<=a;i++){
//           let b=2*i
//           console.log(b)
//     }
// }
//  multiples(n)

// 20. Create Function that will take one parameter and return type of the data.
function type(a) {
  console.log(typeof a);
}
type(10);

//21. Program to find greatest of three numbers(using ternery operator).
let num = Number(prompt("Enter first number"));
let num1 = Number(prompt("Enter second number"));
let num2 = Number(prompt("Enter third number"));
num > num1 && num > num2
  ? console.log(+num + "Is greater")
  : num1 > num && num1 > num2
  ? console.log(+num1 + "Is greater")
  : console.log(+num2 + "is greater");

  //22.// //  C Program to find factorial of number.
// let n=Number(prompt("enter the value"));
// let fact=1;
// for(let i=n;i>1;i--){
//     fact=fact*i;
// }
// console.log(fact)

//23.// . C Program to arrange numbers in ascending order
// 			Input: [2,3,1,5,4]
// 			Output: [1,2,3,4,5]

// 		        Sort the Array using loop only(you can not use predefined function).

// let a=[2,3,1,5,4];
// for(let i=0;i<a.length-1;i++){
//     let flag=0;
//     for(let j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             flag=1
//         }
//     }
//     if(flag===0){
//         break;

/// 24. Print Patter using loop.
// sum=0;
// for(let i=1;i<=5;i++){
//      sum=(sum*10)+i
//     console.log(sum);
// }

//  25. Calculate the Power of a Number(using loop only).
// let n=Number(prompt("enter the value"));
// let p=Number(prompt("enter the value"));
// let output=1
// for(let i=1;i<=p;i++){
//     output*=n
// }
// console.log(output)
// let output=1
// while(p>0){
//     output*=n
//     p--
// }
// console.log(output)

//  26. Program to Check Whether a Number is Prime or Not
// let n=Number(prompt("enter the value"));
// let count=0
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         count++;
//     }
// }
// if(count===2){
//     console.log(`${n} is prime number`)
// }
// else{
//     console.log(`${n} is not a prime number`)
// }

// 27. Program to find LCM of two numbers using while loop
// let n=Number(prompt("Enter first number"))
// let n1=Number(prompt("Enter first number"))
// let l=(n>n1)?n:n1;
// let s=(n<n1)?n:n1;
// for(i=1;i<=s;i++){
//     let output=l*i
//     if(output%s===0){
//         console.log(output)
//         break;
//     }
    
// }

// 28. Program to Display Characters from A to Z Using Loop with count.
// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26 
// let AChar=65;
// let output=""
// for(let i=0;i<26;i++){
//     let char = String.fromCharCode(AChar+i);
//     let count=i+1;
//     output+=(char+count+" ");
// }
// console.log(output)

// 29. Program to find a missing number
// let a=[5,3,1,4];
// let n=5;
// for(let i=1;i<=n;i++){
//     let count=0;
//     for(let j=0;j<n;j++){
//         if(i===a[j]){
//             count++
//         }
//     }
//     if(count===0){
//         console.log(i)
//     }
// }

// 30. Program to count vowels and consonants in a given String.
// let s=prompt("enter the value");
// let v=/[a,e,i,o,u]/
// let vc=0;
// let cc=0;
// for(let i=0;i<s.length;i++){
//     if(v.test(s[i])){
//         vc++
//     }else{
//         cc++
//     }
// }
// console.log(`vowel count ${vc} and consonat count ${cc}`)

//31. program to insert  the elements of an array for specific index.
// let n=Number(prompt("Enter index"))
// let a=[4,5,6,7]
// let b=[]
// for(i=0;i<n;i++){
//     b[i]=a[i];
    
// }
// // console.log(b)
// b[n]=Number(prompt("Enter value"))
// // console.log(b)
// for(j=n+1;j<=a.length;j++){
//     b[j]=a[j-1];
// }
// console.log(b)

// 32. Reverse a number using while Loop
// let n=Number(prompt("Enter a number"))
// let rev=0;
// while(n!==0){
//   let rem= n%10;
//   rev = (rev*10) + rem;
//   n = Math.floor(n/10);
    
// }
// console.log(rev)

// let a=[2,3,4,5,5,5,5,2]
// let n=Number(prompt("Enter number"))
// let count=0;

// for(i=0;i<a.length;i++){
    
//     if(a[i]===n){
//         count++
//     }
// }
// console.log(count)

//pattren
function pattren(a){
    
  for(i=1;i<=a;i++){
      let sum=""
  // console.log(i)
  for(j=i;j>=1;j--){
      // console.log(j)
      sum += j
      if(j!==1)    sum += "#"
      
     
    
     
  }
 console.log(sum)  
}

}

let n=4
pattren(n)