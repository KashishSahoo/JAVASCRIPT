function printt(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}

printt(45,786,8986,897);

function min(a,b,c,d){
    console.log(arguments);
}

min(89,98,76,56);


function sum(...args){
    return args.reduce((sum,el)=>sum+el);
}

let sums=sum(89,7,1,3);
console.log(sums);

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    });
};

let mins=min("hare",90,86,468,99,67,888);
console.log(mins);



