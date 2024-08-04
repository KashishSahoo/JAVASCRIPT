let arr=[9090,37873,789,876,6763];

let print=function(el){
    console.log(el);
};

let prints=(el)=>{
    console.log(el);
};
arr.forEach(prints);

let stud=[
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

stud.forEach((stud)=>{
    console.log(stud.marks);
});
