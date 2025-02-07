const singerData=[
  {
    src:'./images/张惠妹.jpg',
    singer:'张惠妹aMEI',
    intru:'台湾歌手张惠妹'
  },
  {
    src:'./images/吴莫愁.jpg',
    singer:'吴莫愁MOmo',
    intru:'《中国好声音》选...'
  },
  {
    src:'./images/麦田老狼.jpg',
    singer:'麦田老狼',
    intru:'歌手，音乐人。代...'
  },
  {
    src:'./images/孙楠.jpg',
    singer:'孙楠',
    intru:'歌手孙楠 代表作《...'
  },
  {
    src:'./images/陈楚生.jpg',
    singer:'陈楚生',
    intru:'唱作歌手'
  }
]

for(let i=0;i<data.length;i++){
  document.write(`
              <li>
                <div class="singerImg"><img src=${singerData[i].src} alt=""></div>
                <div class="singerInfo">
                  <h4>
                    <span>${singerData[i].singer}</span>
                    <p>${singerData[i].intru}</p>
                  </h4>
              </div>
              </li>
              `)
}