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
    if(interval)
    {
        clearInterval(interval);
    }
    interval = setInterval( () => 
    {
        label.value = randomColor; 
    pallet.style.backgroundColor =  "#"+randomColor;
    label.style.color = randomColor;
    pallet.textContent ="#"+randomColor;
    },20);
    

}
label.addEventListener('keyup', function (event) {
    console.value = event.target.value;
    if(!label.value.includes("#")){
        label.value = "#" + event.target.value;
    }
    
    label.style.color = event.target.value;
    pallet.style.backgroundColor = event.target.value;
});

  btn.addEventListener("click", setBg);
  
 


   
 
  
 

