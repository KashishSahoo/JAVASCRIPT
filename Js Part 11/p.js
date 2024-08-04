// const getPromise=()=>{
//    return  new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("sucess");
//         // reject("Error Has Occured");
//     });
// };

// let promise=getPromise();

// promise.then((res)=>{
//     console.log("Promise Resolved",res)
// });

// promise.catch((err)=>{
//     console.log("Promise Rejected",err)
// });


// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some eeroe has occured");
// });




// getData("data 1").then((res)=>{
//     console.log(res);
//     getData("data 2").then(()=>{
//         console.log(res);
//     })
// });




//Promise Chaining

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",data);
//             resolve("success");
//         },3000);
//     });
// };


// console.log("Fetching Data1...");
// getData("1").then((res)=>{
//     console.log("Fetching Data2...");
//     return getData("2");  
// })
// .then((res)=>{
//     console.log("Fetching Data3...");
//     return getData("3");
// })
// .then((res)=>{
//     console.log(res);
// })







//Async Await
function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data:",data);
            resolve("success");
        },3000);
    });
};


(async function (){
    console.log("Fetching Data 1...");
    await getData(1);
    console.log("Fetching Data 2...");
    await getData(2);
    console.log("Fetching Data 3...");
    await getData(3);
    console.log("Fetching Data 4...");
    await getData(4);
})();



