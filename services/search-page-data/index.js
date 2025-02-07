import { SearchApiRequestInstance } from "./config"

// 前端获取 search/default 接口的 API
export const fetchSearchDefaultDataAction = () => {
  return SearchApiRequestInstance.get("/default")
}

// 前端获取 search/hot 接口的 API
export const fetchSearchHotDataAction = () => {
  return SearchApiRequestInstance.get("/hot")
}

// 前端获取 search/detail 接口的 API
export const fetchSearchDetailDataAction = () => {
  return SearchApiRequestInstance.get("/detail")
}

// 前端获取 search/suggest API 接口
export const fetchSearchSuggestDataAction = (keywords, type) => {
  return SearchApiRequestInstance.get("/suggest", {
    params: {
      keywords,
      type  // 如果是 mobile 的话，返回移动端数据
    }
  })
}

// 搜索多重匹配前端接口 API
export const fetchSearchMultimatchDataAction = (keywords) => {
  return SearchApiRequestInstance.get("/multimatch", {
    params: {
      keywords
    }
  })
}