function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("Success1");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("Success2");
    }, 4000);
  });
}

// console.log("Fetching Data 1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching Data 2....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });



console.log("Fetching Data 1....");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("Fetching Data 2....");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});


// console.log("Fetching Data 2....");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res)
// });
