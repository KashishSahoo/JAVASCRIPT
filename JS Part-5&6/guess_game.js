const max=prompt("Enter The Max Number");
const ran=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess The Number");
while(true){
    if(guess=="quit"){
        alert("Quitting");
    }
    if(guess==ran){
        alert("Congrats");
        break;
    }
    else if(guess<ran){
        guess=prompt("Small Guess,try again");
    }
    else if(guess>ran){
        guess=prompt("Large Guess,try again");
    }
}