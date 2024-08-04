// Qs:1
let arr=["ram","krishna",16,"radha",64];
let s=64;
if(arr.indexOf(s)!=-1){
    console.log("Element Exists");
}
else{
    console.log("Element Do Not Exists");
}
// Qs:2
// let str=prompt("Enter A String:");
let str="    kashish";
console.log(`Orginal String=${str}`);
console.log(`Trimmed String=${str.trim()}`);
// Qs:3
let strr="Kashish Sahoo";
let idx=0;
if(strr[idx]==strr[idx].toLocaleLowerCase()){
    console.log("The Character Is In Lower Case");
}
else{
    console.log("The Character Is Not In Lower Case");
}
//Qs:4
let str1="Kashish Sahoo";
if(str1.length==0){
    console.log("Blank String");
}
else{
    console.log("Not Blank String");
}
//Qs:5(Last n Elements)
let a=[1,2,333,444,667,2343,3,9,43];
let n=4;
let ans=a.slice(-(n));
console.log(ans);
//Qs:5(First n Elements)
let a1=[1,2,333,444,667,2343,3,9,43];
let n1=4;
let ans1=a.slice(0,n);
console.log(ans1);




