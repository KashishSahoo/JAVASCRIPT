function table(n,k){
    for(let i=1;i<=k;i++){
     console.log(`${n} *${i}=${n*i}`);
    }
}
// table(15,20);
function sum(a,b){
    return(a+b);
}
// let ans=sum(8,16);
// console.log(ans);
// console.log(sum(sum(12,2),6));

function calSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
     sum=sum+i;
    }
    return(sum);
}
console.log(calSum(10));

function con(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}

let str=["chant","hare","krishna"];
console.log(con(str));


