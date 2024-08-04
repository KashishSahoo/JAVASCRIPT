function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
        
    },3000);
   
}  
getData("kashish",()=>{
    getData(16108);
});


