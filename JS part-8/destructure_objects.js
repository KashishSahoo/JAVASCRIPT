const student={
    Name:"kashish sahoo",
    age:20,
    class:"3rd year",
    subjects:["OS","DBMS","CN","OPPs"],
    username:"kashish@123",
    password:86200202
};

let user=student.username;
let pwd=student.password;

let{username,password,Name:naam,city="vizag",country:desh="India"}=student;
console.log(username);
console.log(password);
console.log(naam);
console.log(city);
console.log(desh);