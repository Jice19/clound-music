const hotDjData=[
  {
    src:'./images/陈立.jpg',
    name:'陈立',
    intru:'心理学家、美食家陈立教授'
  },
  {
    src:'./images/刘维.jpg',
    name:'刘维',
    intru:'歌手、博客节目《维维道来...'
  },
  {
    src:'./images/莫非定律.jpg',
    name:'莫非定律乐团',
    intru:'男女双人全创作独立乐团'
  },
  {
    src:'./images/碎嘴.jpg',
    name:'碎嘴许美达',
    intru:'脱口秀网络红人'
  },
  {
    src:'./images/银临.jpg',
    name:'银临Rachel',
    intru:' '
  }
]

for(let i=0;i<hotDjData.length;i++){
  document.write(`
    <li>
                <div class="djImg">
                  <img src=${hotDjData[i].src} alt="">
                </div>
                <div class="djInfo">
                  <span>${hotDjData[i].name}</span>
                  <p>${hotDjData[i].intru}</p>
                </div>
              </li>
    `)
}