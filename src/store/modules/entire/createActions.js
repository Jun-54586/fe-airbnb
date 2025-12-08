import { getEntireRoomList } from "@/services/modules/entire"
import * as actionType from "./constants"


export const changeCurrentPageAction = (currentPage) => ({
  type: actionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionType.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionType.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionType.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(false))
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
    console.log(res);
    
  }
  // return dispatch => {
  //   getEntireRoomList(0).then(res => {
  //     console.log(res);
      
  //   })
  // }
}