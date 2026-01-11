const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

canvas.addEventListener('click', e => {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      vx: Math.random() * 6 - 3,
      vy: Math.random() * 6 - 3,
      life: 100
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.fillStyle = 'white';
    ctx.fillRect(p.x, p.y, 2, 2);

    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
animate();
