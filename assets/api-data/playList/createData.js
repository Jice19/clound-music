import { fetchPlaylistCreateDataAction } from "../../../services/playList-page-data";

// 如果是含有查询参数的接口，我们就直接封装成函数形式
// 后面直接在页面中进行发送请求即可
// 对于参数是否可选直接在这里决定即可，使用函数的默认参数来决定请求参数是否可选
export function getCreateDataAction(name, privacy = 10, type = "NORMAL") {
  return fetchPlaylistCreateDataAction(name, privacy, type)
}