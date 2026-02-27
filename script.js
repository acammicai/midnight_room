// MUSIC BUTTON
const musicBtn = document.getElementById('music-btn');
const music = document.getElementById('music');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '🔇 Pause Lo-fi';
  } else {
    music.pause();
    musicBtn.textContent = '🎧 Play Lo-fi';
  }
});

// CLICKABLE OBJECT
const object = document.getElementById('clickable-object');
const message = document.getElementById('message');

object.addEventListener('click', () => {
  message.textContent = "🌌 The midnight whispers your secrets...";
  setTimeout(() => {
    message.textContent = "✨ Click the object for a hidden message ✨";
  }, 4000);
});

// PARTICLE EFFECT
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#66fcf1', '#45a29e', '#c5c6c7', '#1f2833'];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();
