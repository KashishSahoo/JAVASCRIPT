let todo=[];
let req=prompt("Please Enter Your Request:");
while(true){
    if(req=="quit"){
        alert("Quitting The Todo");
        break;
    }
    if(req=="list"){
        console.log("----------------------");
        for(let i=0;i<=todo.length;i++){
            console.log(i+1,todo[i]);
        }
        alert(todo);
        console.log("----------------------");
    }
    else if(req=="add"){
       let task= prompt("Please Enter the task you want to add:");
       todo.push(task);
       alert("Task Added");
       console.log("Task Added");
    }
    else if(req=="delete"){
        let idx=prompt("please enter the task no you want to delete:");
        let ind=idx-1;
        todo.splice(ind,1);
        alert("task deleted");
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
        alert("wrong request");
    }
    req=prompt("Please Enter Your Request:");
  
}