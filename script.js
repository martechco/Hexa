// Typing effect
const text="Secure Website Designer";
let i=0;
function typing(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();

// Pricing calculator
const type=document.getElementById("type");
const security=document.getElementById("security");
const total=document.getElementById("total");
function calculate(){
  let price=parseInt(type.value)+parseInt(security.value);
  total.innerText="$"+price;
}
type.addEventListener("change",calculate);
security.addEventListener("change",calculate);

// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click",function(){
  document.querySelector(".nav-links").classList.toggle("active");
});
