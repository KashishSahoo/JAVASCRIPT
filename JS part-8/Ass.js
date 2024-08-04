//Qs:1
let Names=["Radha","Lalitha","Vishakha","Shyamala"];
console.log(Names.map((naam)=>naam.toUpperCase()));
//Qs:2
let nums=[90,87,64,60];
console.log(nums.map((el)=>el+5));
//Qs:3
let num=[9,8,2,6];
const sq=num.map((el)=>el*el);
console.log(sq);

let sum=sq.reduce((acc,el)=>acc+el);
console.log(sum);

let avg=sum/num.length;
console.log(avg);

//Qs:4
const doubleAndOrg=(arr,...args)=>[
    ...arr,
    ...args.map((el)=>el*2),
];

console.log(doubleAndOrg([2,3,4],5,6));

//Qs:5

const merge=(obj1,obj2)=>({...obj1,...obj2});
console.log(merge({a:1,b:2},{c:3,d:4}));

