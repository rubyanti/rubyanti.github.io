// 动态背景效果 - 使用你的图片
document.addEventListener('DOMContentLoaded', function() {
  const bgContainer = document.getElementById('dynamic-bg');
  
  // 用你的图片路径替换这里
  const bgImageUrl = 'images/bg.jpg'; 
  
  // 创建3个视差层
  for (let i = 1; i <= 3; i++) {
    const layer = document.createElement('div');
    layer.className = 'parallax-layer';
    layer.style.backgroundImage = `url(${bgImageUrl})`;
    layer.style.opacity = 0.7 - (i * 0.2);
    bgContainer.appendChild(layer);
  }

  // 鼠标移动效果
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.parallax-layer').forEach((layer, i) => {
      const speed = 0.1 + (i * 0.05);
      const offsetX = (x - 0.5) * 50 * speed;
      const offsetY = (y - 0.5) * 30 * speed;
      
      layer.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.0${i})`;
    });
  });
});
