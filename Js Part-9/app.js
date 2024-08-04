// let smallImg=document.getElementsByClassName("oldImg");
// for(i=0;i<smallImg.length;i++){
//     console.dir(smallImg[i]);
//     console.dir(smallImg[i].src);
// }
// for(i=0;i<smallImg.length;i++){
// smallImg[i].src="spiderman_img.png";
// console.log(`Value of image no. ${i+1} is changed`);
// }
 
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("p"));

// let links=document.querySelectorAll('.box a');

// for(let i=0;i<links.length;i++){
//     links[i].style.color="red";
// }
// for(link of links){
//     link.style.color="red";
// }

let para1=document.createElement("p");
para1.innerText="Hey I am red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3=document.createElement("h3");
h3.innerText="Hey I am blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I am in a div";
para2.innerText="Me Too";

div.append(h1);
div.append(para2);

div.classList.add("box");
document.querySelector("body").append(div);

