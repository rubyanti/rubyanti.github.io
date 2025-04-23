// 全屏滚动控制器
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.project-section');
  let currentIndex = 0;
  let isScrolling = false;
  
  // 初始化位置
  sections.forEach((section, index) => {
    section.style.transform = `translateY(${index * 100}%)`;
  });

  // 鼠标滚轮事件
  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    if (e.deltaY > 0) {
      goTo(currentIndex + 1);
    } else {
      goTo(currentIndex - 1);
    }
  });

  // 触摸事件
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  window.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goTo(currentIndex + 1);
      } else {
        goTo(currentIndex - 1);
      }
    }
  }, { passive: true });

  // 跳转到指定章节
  function goTo(index) {
    if (index < 0 || index >= sections.length) return;
    
    isScrolling = true;
    currentIndex = index;
    
    sections.forEach((section, i) => {
      section.style.transform = `translateY(${100 * (i - index)}%)`;
      section.style.opacity = i === index ? 1 : 0.3;
    });
    
    setTimeout(() => isScrolling = false, 1000);
  }
});
