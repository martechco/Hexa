// Typing animation for "I'm Hexa"
const heroText = "Secure Website Designer";
let i = 0;
function typing() {
  if(i < heroText.length){
    document.getElementById("typing").innerHTML += heroText.charAt(i);
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
  total.innerText = "$" + ((pagePrice * numPages) + extraPrice);
}
pages.addEventListener("input", calculateTotal);
extras.addEventListener("change", calculateTotal);
calculateTotal();

// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function(){
  document.querySelector(".nav-links").classList.toggle("active");
});

// Hero background particles
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
const particleCount = 50;

class Particle {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.radius = Math.random()*5+2;
    this.speedX = Math.random()*1-0.5;
    this.speedY = Math.random()*1-0.5;
    this.color = 'rgba(0,255,174,0.4)';
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x<0||this.x>canvas.width) this.speedX*=-1;
    if(this.y<0||this.y>canvas.height) this.speedY*=-1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for(let i=0;i<particleCount;i++) particles.push(new Particle());

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
