import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo((props) => {

  const { totalCount, currentPage, roomList } = useSelector((state) => ({
      totalCount: state.entire.totalCount, 
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0,0)

    dispatch(fetchRoomListAction(pageCount - 1))

  }

  return (
    <PaginationWrapper>
      
      EntirePagination
    </PaginationWrapper>
  )
})

export default EntirePagination
