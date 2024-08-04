const base_url="htpps://iskon.vizag.com";
const dropdownSelect=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of dropdownSelect){
    for(currCode in countryList)
        {
            // console.log(code,countryList[code]);
            let newOption=document.createElement("option");
            newOption.innerText=currCode;
            newOption.value=currCode;
            select.append(newOption);

            if(select.name=="from" && currCode=="USD"){
                newOption.selected="selected";
            }
            if(select.name=="to" && currCode=="INR"){
                newOption.selected="selected";
            }
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);

        });
}

const updateFlag=(element)=>{
    // console.log(element);
    let currCode=element.value;
    let countryCode=countryList[currCode];
    // console.log(currCode);
    // console.log(countryCode);
    let newSrc=`https://flagsapi.com/${currCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount=amtVal*rate;
    // msg.innerText="1USD=80INR";
    msg.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;
   
  };
  window.addEventListener("load", () => {
    updateExchangeRate();
  });

