async function greet(){
    console.log("hare krishna");
}

async function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Weather Data");
        resolve("Success:weather dat fetched");
       },3000);
    });
}

async function getWeather(){
    await api();
    await api();
}