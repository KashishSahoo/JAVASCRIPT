function saveToDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

saveToDB(
  "SP Books",
  () => {
    console.log("success:Data Saved");
    saveToDB(
      "chant",
      () => {
        console.log("s2:data2 saved");
      },
      () => {
        console.log("f2:not saved");
      }
    );
  },
  () => {
    console.log("Failure:Week Connection and Data not saved");
  }
);
