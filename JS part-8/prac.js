let ans=[20,40,60,10].every((el)=> el%10==0);
console.log(ans);

let mins=[3,4,2,90,1,22].reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});
console.log(mins);