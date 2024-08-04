let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    // console.log("Button was clicked");
    // console.log(country);
    let colArr=await getColleges(country);
    // console.log(colArr);
    show(colArr);
});

function show(colArr){
    list.innerText="";
    for(col of colArr){
        let list=document.querySelector("#list");
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
        // console.log(col);
        console.log(col.name);
    }
}

// let country="nepal";

async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        // console.log(res);
        // console.log(res.data);
        return res.data;

    }
    catch(e){
        console.log("ERROR");
        return [];
    }
}