let btns=document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("button was clicked");
//     alert("button was clicked");
// }

function sayHello(){
    alert("Hare Krishna!!");
}
function sayName(){
    alert("RadhaKrishna!!");
}

// btn.onclick=sayHello;
// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("Button clicked");
//     }
// }
for(btn of btns){
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick",function(){
    console.log("You Double Clicked!!");
   });

}

let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("Para was Clicked!!");
   });

let box=document.querySelector(".box");

box.addEventListener("mouseenter",function(){
    console.log("Div was Clicked!!");
   });
