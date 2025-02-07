document.addEventListener('DOMContentLoaded', function () {
  const leftBtn = document.querySelector('.xdsj-wrap .leftBtn');
  const rightBtn = document.querySelector('.xdsj-wrap .rightBtn');
  const ulList = document.querySelectorAll('.rollWrap ul');
  let currentIndex = 0;

  // 显示当前索引对应的 ul
  function showCurrentUl() {
      ulList.forEach((ul, index) => {
          if (index === currentIndex) {
              ul.style.display = 'block';
          } else {
              ul.style.display = 'none';
          }
      });
  }

  // 右按钮点击事件
  rightBtn.addEventListener('click', function (event) {
      event.preventDefault();
      currentIndex = (currentIndex + 1) % ulList.length;
      showCurrentUl();
  });

  // 左按钮点击事件
  leftBtn.addEventListener('click', function (event) {
      event.preventDefault();
      currentIndex = (currentIndex - 1 + ulList.length) % ulList.length;
      showCurrentUl();
  });
});