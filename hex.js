const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// #f15025
const btn=document.getElementById("btn");
const color=document.querySelector(".colour");

btn.addEventListener("click",function(){

    let hexcolor='#';

    for(let i=0;i<6;i++){
        hexcolor=hexcolor+hex[getRandom()];
    }

    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
})

function getRandom(){
    let random=Math.random();
    return Math.floor(random*hex.length);
}