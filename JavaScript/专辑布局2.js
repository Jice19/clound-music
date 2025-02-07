let sliderData1=[
  {
    songName:'量变零界点',
    singer:'华晨宇',
    scr:'./images/专辑封面6.jpg'
  },
  {
    songName:'Balloonerism',
    singer:'Mac Miller',
    scr:'./images/专辑封面7.jpg'
  },
  {
    songName:'WINTER',
    singer:'GOT7',
    scr:'./images/专辑封面8.jpg'
  },
  {
    songName:'春龙交响夜',
    singer:'罗大佑',
    scr:'./images/专辑封面9.jpg'
  },
  {
    songName:'Superbloom',
    singer:'Chris James',
    scr:'./images/专辑封面10.jpg'
  }
]

// 获取各个标签并赋值 使用循环
for(let i=0;i<sliderData1.length;i++){
  document.write(`
    <li title=${sliderData1[i].songName}>
                    <!-- 滚动封面 -->
                    <div class="cover-image">

                      <!-- 专辑的播放按钮 -->
                       <a href="#" class="cover-play" title="播放"></a>
                      <img src=${sliderData1[i].scr} alt="">
                      <a href="#" class="cover-bgi"></a>
                    </div>
                    <!-- 专辑名称与歌手 -->
                      <a href="#" title=${sliderData1[i].songName} class="music-name">${sliderData1[i].songName}</a>
                      <a href="#" title=${sliderData1[i].singer} class="music-singer"><br>${sliderData1[i].singer}</a>
                  </li>  
    `)
}