let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector("#result");

btn.addEventListener("click",async()=>{
let fact=await getFacts();
p.innerText=fact;
console.log(fact);
});

async function getFacts(){
    try{
        let res=await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.fact);
        return res.data.fact;
    }
    catch(e){
      console.log("Error:",e);
      return "No Data Found";
    }
}