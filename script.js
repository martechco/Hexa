// typing animation

const text = "Secure Website Designer";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();



// pricing calculator

const pages = document.getElementById("pages");
const seo = document.getElementById("seo");
const security = document.getElementById("security");
const total = document.getElementById("total");

function calculate(){

let price = pages.value * 50;

if(seo.checked) price += 100;

if(security.checked) price += 150;

total.innerText = price;

}

pages.addEventListener("input",calculate);
seo.addEventListener("change",calculate);
security.addEventListener("change",calculate);



// mobile menu

document.querySelector(".menu-toggle").addEventListener("click",function(){

document.querySelector(".nav-links").classList.toggle("active");

});
