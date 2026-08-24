// Animated Starfield Canvas
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 140;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  stars.forEach(star => {
    star.alpha += star.speed * star.direction;
    if (star.alpha <= 0.1 || star.alpha >= 0.9) {
      star.direction *= -1;
    }
    
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.shadowBlur = star.radius > 1.5 ? 6 : 0;
    ctx.shadowColor = '#FFFFFF';
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();

// Android Modal Triggers
const androidBtn = document.getElementById('androidInstallBtn');
const androidModal = document.getElementById('androidModal');
const closeAndroidModal = document.getElementById('closeAndroidModal');

if (androidBtn && androidModal && closeAndroidModal) {
  androidBtn.addEventListener('click', () => {
    androidModal.classList.add('active');
  });

  closeAndroidModal.addEventListener('click', () => {
    androidModal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === androidModal) {
      androidModal.classList.remove('active');
    }
  });
}

// iOS Modal Triggers
const iosBtn = document.getElementById('iosInstallBtn');
const iosModal = document.getElementById('iosModal');
const closeIosModal = document.getElementById('closeIosModal');

if (iosBtn && iosModal && closeIosModal) {
  iosBtn.addEventListener('click', () => {
    iosModal.classList.add('active');
  });

  closeIosModal.addEventListener('click', () => {
    iosModal.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target === iosModal) {
      iosModal.classList.remove('active');
    }
  });
}
