import ljRequest from "..";


export function getEntireRoomList(offset = 0, size = 20) {
  return ljRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}