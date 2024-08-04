let arr=[1,2,3,4];
let newArr=arr;
newArr[4]=5;
console.log(newArr);
console.log(arr);


let spArr=[...arr];
spArr[5]=6;
console.log(spArr);
console.log(arr);

let chars=[..."hare"];
console.log(chars);

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let numbers=[...odd,...even];
console.log(numbers);
