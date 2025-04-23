// 鼠标视差背景控制器
class DynamicBackground {
  constructor() {
    this.container = document.getElementById('dynamic-bg');
    this.layers = [];
    this.mouse = { x: 0, y: 0 };
    
    // 配置参数
    this.settings = {
      imageUrl: 'images/bg.jpg', // 你的背景图路径
      layerCount: 4,            // 分层数量
      maxOffset: 100,           // 最大移动距离(px)
      scaleRange: 0.2           // 缩放幅度
    };

    this.init();
  }

  init() {
    // 创建分层
    for (let i = 0; i < this.settings.layerCount; i++) {
      const layer = document.createElement('div');
      layer.className = 'parallax-layer';
      layer.style.backgroundImage = `url(${this.settings.imageUrl})`;
      layer.style.zIndex = -1000 - i;
      layer.style.opacity = 1 - (i * 0.2);
      this.container.appendChild(layer);
      this.layers.push(layer);
    }

    // 鼠标追踪
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
      this.update();
    });

    // 自动浮动动画
    this.floatAnimation();
  }

  update() {
    this.layers.forEach((layer, i) => {
      const depth = (i + 1) / this.settings.layerCount;
      const offsetX = this.mouse.x * this.settings.maxOffset * depth;
      const offsetY = this.mouse.y * this.settings.maxOffset * depth * 0.6;
      const scale = 1 + (this.settings.scaleRange * depth);

      layer.style.transform = `
        translate(${offsetX}px, ${offsetY}px)
        scale(${scale})
      `;
    });
  }

  floatAnimation() {
    // 添加随机浮动
    this.layers.forEach(layer => {
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      
      layer.style.transition = `
        transform ${duration}s cubic-bezier(0.17, 0.67, 0.21, 0.99) ${delay}s
      `;
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });

    setTimeout(() => this.floatAnimation(), 20000);
  }
}

// 初始化
new DynamicBackground();
