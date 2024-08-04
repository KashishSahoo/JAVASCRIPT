function getData(data) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Data:", data);
      resolve("Success:data fetched");
    }, 3000);
  })
}


//ASYNC AND AWAIT
async function getAllData(){
  console.log("Getting Data1...");
  await getData("kashish sahoo");
  console.log("Getting Data2...");
  await getData("20");
  console.log("Getting Data3...");
  await getData("11 LPA");
}


getAllData();




// PROMISES
// getData("Kashish Sahoo").then((res)=>{
//   console.log(res);
//   getData("20").then(()=>{
//     console.log(res);
//   })
// });


//CALL BACK HELL
// console.log("Getting Data1...");
// getData("kashish sahoo").then((res)=>{
//   console.log("Getting Data2...");
//   return getData(20);
// }).then((res)=>{
//   console.log("Getting Data3...");
//  return getData("11 LPA");
// }).then((res)=>{
//   console.log(res);
// })


// call back hell
// getData("Kashish Sahoo", () => {
//   console.log("Getting Data2...");
//   getData("20", () => {
//     console.log("Getting Data3...");
//     getData("IBM", () => {
//       console.log("Getting Data4...");
//       getData("11 LPA");
//     });
//   });
// });
