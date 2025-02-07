           let data = [
              {
                src:'./images/cover1.jpg',
                content:'那些超带感的英文歌'
              },
              {
                src:'./images/cover2.jpg',
                content:'让耳朵怀孕，确定不进来听听嘛'
              },
              {
                src:'./images/cover3.jpg',
                content:'适合写作业听的纯音乐'
              },
              {
                src:'./images/cover4.jpg',
                content:'信老婆不仅能发达，还能救命？不信就进来听听'
              },
              {
                src:'./images/cover5.jpg',
                content:'如果你想听民谣，可以从这些歌听起'
              },
              {
                src:'./images/cover6.jpg',
                content:'进来谈谈我们的人生'
              },
              {
                src:'./images/cover7.jpg',
                content:'假如能回到过去，你想要做什么'
              },
              {
                src:'./images/cover8.jpg',
                content:'大香蕉-吴飞华'
              }
          ]
          for(let i=0;i<data.length;i++){
            document.write(`
              <li>
            <div class="cover">
              <img src=${data[i].src} alt="">
              <!-- 阴影 -->
              <div class="bottom">
                <a href="#" class="icon-play" title="播放"></a>
                <span class="icon-head"></span>
                <span class="playNumber">666</span>
              </div>
            </div>
            <p class="musicContent">${data[i].content}</p>
          </li>
            `)
          }
          