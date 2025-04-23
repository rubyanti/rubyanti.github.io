// 全屏滚动控制器
class ProjectScroller {
  constructor() {
    this.sections = document.querySelectorAll('.project-section');
    this.currentIndex = 0;
    this.isScrolling = false;
    
    this.init();
  }

  init() {
    // 初始化布局
    this.sections.forEach((section, i) => {
      section.style.transform = `translateY(${i * 100}%)`;
    });

    // 滚动事件
    window.addEventListener('wheel', (e) => {
      if (this.isScrolling) return;
      
      if (e.deltaY > 0) {
        this.next();
      } else {
        this.prev();
      }
    });

    // 触摸支持
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });
    window.addEventListener('touchend', (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });
  }

  next() {
    if (this.currentIndex >= this.sections.length - 1) return;
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    if (this.currentIndex <= 0) return;
    this.goTo(this.currentIndex - 1);
  }

  goTo(index) {
    this.isScrolling = true;
    this.currentIndex = index;
    
    this.sections.forEach((section, i) => {
      section.style.transform = `translateY(${100 * (i - index)}%)`;
      section.style.opacity = i === index ? 1 : 0.3;
    });

    setTimeout(() => this.isScrolling = false, 1000);
  }
}

// 初始化
new ProjectScroller();
