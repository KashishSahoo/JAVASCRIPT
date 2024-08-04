// async function hare(){
// console.log("Hare Krishna");
// }


function api(){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Weather Data");
    resolve(200);
   })
    },3000);
}

async function getWeatherData(){
    await api();//1st call
    await api();//2nd call
}

