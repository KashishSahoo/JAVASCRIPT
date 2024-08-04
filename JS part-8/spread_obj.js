let data={
    email:"abc@gmail.com",
    password:78936
}

let newData={
    ...data,
    id:224422
};

console.log(data);
console.log(newData);

let arr=[56,76,89,90,34];
let obj={...arr};
console.log(obj);

let str="Rama";
let obj1={...str};
console.log(obj1);