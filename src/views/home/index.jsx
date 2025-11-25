import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAtion } from '@/store/modules/home'
import HomeWrapper from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'

import SectionRooms from '@/components/section-rooms'


const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  // 派发网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAtion())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>

    </HomeWrapper>
    
  )
})

export default Home
