const student={
    Name:"kashish",
    age:20,
    prop:this,
    getName:function(){
        console.log(this);
        return this.Name;
    },
    getAge:()=>{
        console.log(this);
        return this.age;
    }
};

console.log(student.getAge());