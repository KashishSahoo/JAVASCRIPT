function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
     resolve("Data Saved");
    } else {
      reject("Data Not Saved");
    }
  });
}

let request=saveToDB("Hare Krishna"); //Req=promise obj
console.log(request);
request.then(()=>{
    console.log("Promise resolved");
})
.catch(()=>{
    console.log("Promise rejected");
})
