let sliderData=[
  {
    songName:'Walkerworld 2.0',
    singer:'Alan Walker',
    scr:'./images/专辑封面1.jpg'
  },
  {
    songName:'趁记忆消失之前...',
    singer:'陈珊妮',
    scr:'./images/专辑封面2.jpg'
  },
  {
    songName:'背面是我',
    singer:'丁世光',
    scr:'./images/专辑封面3.jpg'
  },
  {
    songName:'珍珠刑',
    singer:'魏如萱',
    scr:'./images/专辑封面4.jpg'
  },
  {
    songName:'赛浪20',
    singer:'海龟先生',
    scr:'./images/专辑封面5.jpg'
  }
]

// 获取各个标签并赋值 使用循环
for(let i=0;i<sliderData.length;i++){
  document.write(`
    <li title=${sliderData[i].songName}>
                    <!-- 滚动封面 -->
                    <div class="cover-image">

                      <!-- 专辑的播放按钮 -->
                       <a href="#" class="cover-play" title="播放"></a>
                      <img src=${sliderData[i].scr} alt="">
                      <a href="#" class="cover-bgi"></a>
                    </div>
                    <!-- 专辑名称与歌手 -->
                      <a href="#" title=${sliderData[i].songName} class="music-name">${sliderData[i].songName}</a>
                      <a href="#" title=${sliderData[i].singer} class="music-singer"><br>${sliderData[i].singer}</a>
                  </li>  
    `)
}