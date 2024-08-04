h1=document.querySelector("h1");



function changeColor(color,delay,nsch){
  setTimeout(()=>{
    h1.style.color=color;
    if(nsch) nsch();
  },delay);
}
setTimeout(changeColor("blue",1000,()=>{changeColor("yellow",1000,()=>{changeColor("green",1000)})}));


