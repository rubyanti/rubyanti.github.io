// 自定义鼠标
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// 为所有链接添加悬停效果
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  link.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});
