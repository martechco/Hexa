// Typing effect
const text = "Secure Website Designer";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 80);
    }
}
window.onload = typingEffect;

// Pricing Calculator
function calculatePrice() {
    let pages = document.getElementById("pages").value;
    let seo = document.getElementById("seo").checked;
    let security = document.getElementById("security").checked;

    let total = pages * 50;

    if (seo) total += 100;
    if (security) total += 150;

    document.getElementById("total").innerText = total;
}

// Mobile menu
document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("active");
});
// Mobile menu toggle
const menu
