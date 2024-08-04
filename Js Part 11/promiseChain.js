function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("suucess1");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("suucess2");
    }, 4000);
  });
}

// console.log("Fetching Data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching Data2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

console.log("Fetching Data1");
asyncFunc().then((res) => {
  console.log("Fetching Data2");
  asyncFunc2().then((res) => {});
});
