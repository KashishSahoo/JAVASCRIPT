const student={
    Name:"Kashish",
    age:20,
    eng:97,
    math:99,
    sst:100,

    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.sst)/3;
        console.log(avg);
    }
};

console.log(student.age);
console.log(student.eng);
console.log(student.getAvg());

function getAvg(){
    console.log(this);
}

console.log(getAvg());