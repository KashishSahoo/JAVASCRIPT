//Qs:1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="click me";
document.querySelector("body").append(button);
//Qs:2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
//Qs:3
let btn=document.querySelector("#btn");
btn.classList.add("btn_style");
//Qs:4
let h1=document.createElement("h1");
h1.innerHTML="<u>Practice</u>";
h1.classList.add("purple");
document.querySelector("body").prepend(h1);
//Qs:5
let p=document.createElement("p");
p.innerHTML="apna college <b>delta</b> batch";
document.querySelector("body").append(p);


