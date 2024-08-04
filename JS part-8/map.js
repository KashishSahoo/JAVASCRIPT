let nums=[1,2,3,4,5];

let double=nums.map((el)=>{
    return el*2;
});

console.log(double);

let students=[
    {
        Name:"kashish",
        marks:94
    },
    {
        Name:"Sahoo",
        marks:96
    },
    {
        Name:"sneha",
        marks:95
    }
];

let gpa=students.map((el)=>{
    return el.marks/10;
});

console.log(gpa);



