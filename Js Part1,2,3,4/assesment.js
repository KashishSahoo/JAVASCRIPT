//Qs:1
let a=321;
let b=787971;
if(a%10==b%10){
 console.log("End with same last digit");
}
else{
    console.log("Do not end with same last digit");
}
//Qs:2
let n1=90;
let n2=99;
let n3=108;
if(n1>n2 && n1>n3){
    console.log(`${n1} is greatest`);
}
else if(n2>n1 && n2>n3){
    console.log(`${n2} is greatest`);
}
else if(n3>n2 && n3>n1){
    console.log(`${n3} is greatest`);
}
//Qs:3
let str="Ambrendra Das Prabhuji";
if(str[0]=='A' && str.length>5){
    console.log("Golden String");
}
else{
    console.log(" Not A sGolden String");
}
//Qs:4

let quater=3;

switch(quater){
    case 1:
        console.log("January, Febuary, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 1:
        console.log("October, November, December");
        break;
    default:
        console.log("NOT A QUARTER");
}
//Qs:5

let num=20;
if(num%10==0){
    console.log("Good!!!");
}
else{
    console.log("Bad");
}
