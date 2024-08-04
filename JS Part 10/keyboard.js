let btn = document.querySelector("button");
let inp = document.querySelector("input");
// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("Button Clicked");
// });

// inp.addEventListener("keydown", function (event) {
//    console.log(event);
//    console.log("key=",(event.key));
//    console.log("code=",(event.code));
//    console.log("Key was pressed");
//     });
// inp.addEventListener("keyup", function (event) {
//   console.log("Key was released");
// });
inp.addEventListener("keydown", function (event) {
  console.log("code=", event.code);
  if(event.code=="KeyU"){
    console.log("character moves forward");
  }
  else if(event.code=="KeyD"){
    console.log("character moves backward");
  }
  else if(event.code=="KeyL"){
    console.log("character moves left");
  }
  else if(event.code=="KeyR"){
    console.log("character moves right");
  }
});
