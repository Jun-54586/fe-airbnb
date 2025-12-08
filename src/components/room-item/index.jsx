import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { Carousel, Collapse } from 'antd'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import classNames from 'classnames'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const RoomItem = memo(function RoomItem(props) {

  const { itemData, itemWidth="25%" } = props
  const sliderRef = useRef()

  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

  }
  

  return (
    <RoomItemWrapper 
    verifycolor={itemData?.verify_info?.text_color || "#39576a"}
    itemwidth={itemWidth}
    >
      <div className='inner'>
        {/* <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className='swiper'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30"/>
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30"/>
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className='cover' key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>
          {itemData.name}
        </div>
        <div className='price'>
          ￥{itemData.price}/晚
        </div>
        <div className='bottom'>
          <Rating 
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem
