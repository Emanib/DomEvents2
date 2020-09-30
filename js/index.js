// Here you can access the colors variable
// have fun
const pallet = document.querySelector("#pallete");
const btn = document.getElementById("btn");
const label = document.querySelector("#color");
// console.log(pallet,btn,label);
const randomColor = Math.floor(Math.random()*16777215).toString(16); 
//console.log(randomColor);
let interval; 
function setBg()
{
   label.value = randomColor; 
    pallet.style.backgroundColor =  "#"+randomColor;
    label.style.color = randomColor;
    pallet.textContent ="#"+randomColor;
}
  btn.addEventListener("click", setBg);

 


   
 
  
 

