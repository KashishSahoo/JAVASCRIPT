// function multiGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("Hare Krishna");
// }

// multiGreet(greet,4);

function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}

let request="odd";
let func=oddEvenTest(request);
console.log(func(8));