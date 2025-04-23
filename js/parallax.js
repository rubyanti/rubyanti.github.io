// 动态背景控制器
document.addEventListener('DOMContentLoaded', () => {
  const bgContainer = document.getElementById('dynamic-bg');
  const bgImage = 'images/bg.jpg'; // 你的背景图路径
  
  // 创建3个视差层
  for (let i = 0; i < 3; i++) {
    const layer = document.createElement('div');
    layer.className = 'parallax-layer';
    layer.style.backgroundImage = `url(${bgImage})`;
    layer.style.opacity = 0.7 - (i * 0.2);
    layer.style.zIndex = -1000 - i;
    bgContainer.appendChild(layer);
  }

  // 鼠标移动效果
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // 动画循环
  function animate() {
    document.querySelectorAll('.parallax-layer').forEach((layer, i) => {
      const depth = (i + 1) / 3;
      const offsetX = mouseX * 100 * depth;
      const offsetY = mouseY * 60 * depth;
      const scale = 1 + (0.1 * depth);
      
      layer.style.transform = `
        translate(${offsetX}px, ${offsetY}px)
        scale(${scale})
      `;
    });
    requestAnimationFrame(animate);
  }
  animate();

  // 随机浮动背景
  setInterval(() => {
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      layer.style.transition = 'transform 15s linear';
      layer.style.transform += ` translate(${x}px, ${y}px)`;
    });
  }, 15000);
});
