// Qs:1
function get_larger_element(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
arr=[22,1,2,3,44,4,21,20];
num=5;
console.log(get_larger_element(arr,num));

// Qs:2

function unique_char_in_arr(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let curChar=str[i];
        if(ans.indexOf(curChar)==-1){
            ans+=curChar;
        }
    }
    return ans;
}

let str="abcdabcdefgghhijdki";
console.log(unique_char_in_arr(str));
// Qs:3
function Large_country(countries){
    let ans=countries[0].length;
    for(let i=0;i<countries.length;i++){
        if(countries[i].length>ans){
           ans=countries[i]
        }
    }
    return(ans);
}
let countries=["Germany","India","United States Of America","Cuba"];
console.log(Large_country(countries));

//Qs:4
function get_vowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
       if(str[i]=='a' || str[i]=='e'||str[i]=='i' || str[i]=='o'||str[i]=='u' || str[i]=='A'||str[i]=='E' || str[i]=='I'||str[i]=='O' || str[i]=='U'){
        count++;
       }
    }
    return(count);
}

let strr="hfhdfxjsjewnknznwaaa";
console.log(get_vowels(strr));

// Qs:5
function random_no_generate(start,end){
    let diff=end-start;
 let ans=Math.floor(Math.random()*diff)+(start+1);
 return ans;
}

console.log(random_no_generate(67,70));
