let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("fact1==",data.fact);
    return fetch(url);
})
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log("fact2==",data.fact);

})
.catch((err)=>{
    console.log("error",err);

})