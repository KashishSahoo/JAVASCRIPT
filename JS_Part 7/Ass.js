//Qs:1
const avg=(arr)=>{
    let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  let avgg=sum/arr.length;
  return avgg
};

let anss=avg([99,98,96,100,94]);
console.log(anss);

//Qs:2

const Even=(n)=>{
    return (n%2==0);
};

let ans=Even(16);
console.log(ans);