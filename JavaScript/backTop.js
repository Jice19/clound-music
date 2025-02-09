// 获取回到顶部按键
const backTop = document.querySelector('.toTopBtn')

// 给页面添加滚动事件
window.addEventListener('scroll',()=>{
  // 被卷去的头部大于300px，显示回到顶部按钮
  const n = document.documentElement.scrollTop
  // 三目运算符
  backTop.style.display= n > 300 ? 'block' : 'none'
})

// 点击返回顶部
backTop.addEventListener('click',()=>{
  document.documentElement.scrollTop = 0
})