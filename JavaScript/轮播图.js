document.addEventListener('DOMContentLoaded', function () {
    // 获取小圆点元素
    const dots = document.querySelectorAll('.sliderDot a');

    // 初始数据
    const sliderData = [
        { url: 'images/轮播1.jpg' },
        { url: 'images/轮播2.jpg' },
        { url: 'images/轮播3.jpg' },
        { url: 'images/轮播4.jpg' },
        { url: 'images/轮播5.jpg' },
    ];

    // 获取更换的图片
    const img = document.querySelector('#picture');

    // 设置定时器
    let i = 0;
    let intervalId;

    // 启动定时器的函数
    function startSlider() {
        intervalId = setInterval(function () {
            i = (i + 1) % sliderData.length;
            // 图片一秒一换
            img.src = sliderData[i].url;

            // 移除所有小圆点的 active 类
            dots.forEach((dot) => {
                dot.classList.remove('active');
            });

            // 为当前小圆点添加 active 类
            dots[i].classList.add('active');

        }, 3000);
    }

    // 初始化启动定时器
    startSlider();

    // 点击左按钮实现上一张图片
    document.querySelector('.leftBtn').addEventListener('click', () => {
        i = (i - 1 + sliderData.length) % sliderData.length;
        img.src = sliderData[i].url;

        // 移除所有小圆点的 active 类
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        // 为当前小圆点添加 active 类
        dots[i].classList.add('active');
    });

    // 点击右按钮实现下一张图片
    document.querySelector('.rightBtn').addEventListener('click', () => {
        i = (i + 1) % sliderData.length;
        img.src = sliderData[i].url;

        // 移除所有小圆点的 active 类
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });

        // 为当前小圆点添加 active 类
        dots[i].classList.add('active');
    });

    // 为每个小圆点添加点击事件监听器
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            i = index;
            img.src = sliderData[i].url;

            // 移除所有小圆点的 active 类
            dots.forEach((d) => {
                d.classList.remove('active');
            });

            // 为当前点击的小圆点添加 active 类
            dot.classList.add('active');
        });
    });

    // 鼠标悬停在左箭头时清除定时器
    document.querySelector('.leftBtn').addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    // 鼠标离开左箭头时重新启动定时器
    document.querySelector('.leftBtn').addEventListener('mouseleave', () => {
        startSlider();
    });

    // 鼠标悬停在右箭头时清除定时器
    document.querySelector('.rightBtn').addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    // 鼠标离开右箭头时重新启动定时器
    document.querySelector('.rightBtn').addEventListener('mouseleave', () => {
        startSlider();
    });
});