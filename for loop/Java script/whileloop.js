// let a=11
// while(a>=1){
//     console.log(a)
//     a--
// }

// let a=Number(prompt("Enter a number"))
// let x=0
// while(a>0){
//     a=a/10
//     x=x+1
   
// }
// console.log(x)

// let a = Number(prompt("enter a number"));
// let count = 0;
// while (a > 0) {
//   a = a % 10;
//   count++;
// }
// console.log(count);

//sum of digits in a number
// let a=Number(prompt("enter a number"))
// let mul=1
// x=1
// while(a>0){
//     x=a%10
//     mul=mul*x
//     a=Math.trunc(a/10)
// }

// console.log(mul)
// let a=Number(prompt("enter a number"))
// for(i=1;i<=a;i++){
//     if(a%i===0){
//         console.log(i)
//     }
// }

// let X=Number(prompt("Enter a number"))
// frst_digit=Math.trunc(X/10)
// sec_dig=X%10
// console.log(frst_digit**sec_dig)

//
let a=Number(prompt("Enter a number"))
let fact=1
for(i=a;i>0;i--){
    fact=fact*i
   
} console.log(fact)


// find frist 100 prime numbers
let count = 0;
let num=2;
while(count<100){
    let isPrime=true;
    for(let i=2; i<=num/2; i++){
        if(num%i===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(num);
        count++;
    }
    num++;
}