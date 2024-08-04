// let form =document.querySelector("form");
// let user =document.querySelector("#user");
// let pwd =document.querySelector("#pwd");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // console.dir(inp);
    // console.log(inp.value);
    // alert("Form Submiited");
    // console.log(user.value);
    // console.log(pwd.value);
    // alert(`${user.value}, your password is set to ${pwd.value}`);
//      console.dir(form);

//      let user=this.elements[0];//form.elements[0];
//      let pwd=this.elements[1];
//      console.log(user.value);
//      console.log(pwd.value);
//      alert(`${user.value}, your password is set to ${pwd.value}`);


// });
// let form =document.querySelector("form");
// let user =document.querySelector("#user");
// form.addEventListener("submit",function(event){
//         event.preventDefault();
// });

// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value=",this.value);
// });

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value=",this.value);
// });


let inp =document.querySelector("#text");
let p =document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(this.value);
    p.innerText=this.value;
})
