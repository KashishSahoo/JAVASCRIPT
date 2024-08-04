let url="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let link=await getImg();
    console.log(link);
    let img=document.querySelector("#result");
    img.setAttribute("src",link);

});

async function getImg(){
    try{
        let res=await axios.get(url);
        // console.log(res.data.message);
        return (res.data.message);
    }
    catch(e){
        console.log("Error:",e);
        return "/";
      }
}