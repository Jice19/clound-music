import { PlaylistApiRequestInstance } from "./config";

// 前端新建歌单
export const fetchPlaylistCreateDataAction = (name, privacy, type) => {
  return PlaylistApiRequestInstance.get('/create', {
    params: {
      name,
      privacy,
      type
    }
  })
}

// 前端删除歌单
export const fetchPlaylistDeleteDataAction = (id) => {
  return PlaylistApiRequestInstance.get('/delete',{
    params: {
      id
    }
  })
}