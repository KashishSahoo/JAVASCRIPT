let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("fact 1:",data.fact);
    return fetch(url);
})
.then((res2)=>{
    return res2.json();
})
.then((data2)=>{
    console.log("fact 2:",data2.fact);
})
.catch((err)=>{
    console.log("Error:",err);
})

console.log("I am Happy");