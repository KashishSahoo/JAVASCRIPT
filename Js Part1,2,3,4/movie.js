const fav="avatar";
let guess= prompt("Guess My Fav Movie=");
let i=1;
while((guess!=fav)&&(i<3)){
    if(guess=="quit"){
        alert("Ohh Quit");
        break;
    }
    guess=prompt("wrong guess,try again=");
    i++;
}
if(guess==fav){
    alert("Congrats Correct Guess!!!");
}
