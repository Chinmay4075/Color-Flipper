const colours=["green","red","rgba(133,122,200)","#f15025","yellow","blue","purple","teal","pink","orange"];
const btn=document.getElementById("btn");
const color=document.querySelector(".colour");

btn.addEventListener("click",function(){
 
    /*to get different background colors, we are using a random n umber having value
    between 0 and 3....so as to access the array.*/
    console.log("Hey! Its working");
    const randomNumber= getRandonNumber();
    document.body.style.backgroundColor=colours[randomNumber];
    color.textContent=colours[randomNumber];
})

function getRandonNumber(){
    const random=Math.random();
    return Math.floor(random*colours.length);
}

