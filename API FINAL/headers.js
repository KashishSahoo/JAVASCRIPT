const url="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res);
        console.log(res.data);
        console.log(res.data.joke);
    }
    catch{
        console.log("ERROR");
    }
}