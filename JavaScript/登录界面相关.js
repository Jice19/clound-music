// 获取登录遮罩层、登录框和关闭按钮元素
const loginPage = document.querySelector('.login-overlay');
const closeButton = document.querySelector('.login-x');

// 获取两个登录按钮元素
const loginBtn = document.querySelector('.header-login a');
const loginBtn2 = document.querySelector('.userLogin .login-a');

// 点击关闭按钮隐藏登录界面
closeButton.addEventListener('click', () => {
    loginPage.style.display = 'none';
});

// 点击第一个登录按钮显示登录界面
loginBtn.addEventListener('click', () => {
    loginPage.style.display = 'block';
});

// 点击第二个登录按钮显示登录界面
loginBtn2.addEventListener('click', () => {
    loginPage.style.display = 'block';
});