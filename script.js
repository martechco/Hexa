// Typing effect
const text = "Secure Website Designer";
let i = 0;
function typing() {
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Pricing calculator
const pages = document.getElementById("pages");
const extras = document.getElementById("extras");
const total = document.getElementById("total");

function calculateTotal() {
  const pagePrice = 500;
  const numPages = parseInt(pages.value) || 1;
  const extraPrice = parseInt(extras.value) || 0;
  const totalPrice = (pagePrice * numPages) + extraPrice;
  total.innerText = "$" + totalPrice;
}

// Event listeners
pages.addEventListener("input", calculateTotal);
extras.addEventListener("change", calculateTotal);

// Initialize total
calculateTotal();

// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function(){
  document.querySelector(".nav-links").classList.toggle("active");
});
