// Typing effect
const textArray = [
    "Secure Website Designer",
    "Frontend Developer",
    "Cybersecurity Enthusiast"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    type();
});

// Mobile menu toggle
const menu
