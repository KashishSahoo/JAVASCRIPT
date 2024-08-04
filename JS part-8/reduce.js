let nums=[11,22,3,4];
let sum=nums.reduce((res,el)=>{
    return res+el;
});
console.log(sum);

let maxs=nums.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(maxs);
