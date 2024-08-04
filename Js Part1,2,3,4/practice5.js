// Qs:1
let arr=[22,332,898,456,86,22,980,7879,7777,222,98];
let lar=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>lar){
        lar=arr[i];
    }
}
console.log(`The Largest Element Is ${lar}`);

// Qs:2
let n=5;
let fact=1;
for(let i=1;i<=n;i++){
 fact=fact*i;
}
console.log(`The Factorial Is ${fact}`);

// Qs:3

let num=287152;
let sum=0;
while(num>0){
    let digit=num%10;
    sum=sum+digit;
    num=Math.floor(num/10); 
}
console.log(`The Sum Of The Digits Is ${sum}`);
// Qs:4

let num1=287152;
let count=0;
while(num1>0){
 let digit1=num1%10;
 count++;
 num1=Math.floor(num1/10); 

}
console.log(`The Number Of The Digits Is ${count}`);

// Qs:5
let ar=[1,2,3,4,5,6,2,3];
let number=2;
for(let i=0;i<ar.length;i++){
    if(ar[i]==number){
        ar.splice(i,1);
    }
}
console.log(ar);

