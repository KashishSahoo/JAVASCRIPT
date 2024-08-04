const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

// async function getFacts(){
//     console.log("Getting Data...")
//     let response=await fetch(URL);
//     console.log(response.status);
//     console.log(response);//JSON Format
//     let data=await response.json();
//     factPara.innerText=data[0].text;
// }

function getFacts(){
    fetch(URL).then((response)=>{
       return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText=data[0].text;
    })
}
btn.addEventListener("click",getFacts);
