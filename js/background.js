// 动态背景控制器
document.addEventListener('DOMContentLoaded', function() {
  const bgContainer = document.getElementById('dynamic-bg');
  const bgImage = 'images/bg.jpg'; // 你的背景图路径
  
  // 创建3个视差层
  for (let i = 0; i < 3; i++) {
    const layer = document.createElement('div');
    layer.className = 'parallax-layer';
    layer.style.backgroundImage = `url(${bgImage})`;
    layer.style.opacity = 0.6 - (i * 0.2);
    layer.style.zIndex = -1 - i;
    bgContainer.appendChild(layer);
  }

  // 鼠标移动效果
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.parallax-layer').forEach((layer, i) => {
      const speed = 0.05 + (i * 0.03);
      const offsetX = (x - 0.5) * 40 * speed;
      const offsetY = (y - 0.5) * 20 * speed;
      
      layer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.0${i})`;
    });
  });
});