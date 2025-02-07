import { fetchSearchDefaultDataAction } from "../../../services/index"

// 如果是我们的没有参数的接口，我们只要返回数据即可，直接在这里发送网络请求
export const defaultData = fetchSearchDefaultDataAction()
  .then(res => {
    return res?.data
  }).catch(err => {
    return err
  })

// './images/专辑封面1.jpg'
/**
 * img 标签里面使用这个路径的话
 * 或者说是在 background-image 中的 url() 中使用的话
 * 是不行的
 * 
 * new URL('./images/专辑封面1.jpg', import.meta.url).herf
 * require("url")
 */