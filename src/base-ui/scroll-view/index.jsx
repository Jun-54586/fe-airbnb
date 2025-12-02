import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo(function ScrollView(props) {

  // 定义状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const posIndexRef = useRef(0)
  const totalDistanceRef = useRef()

  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth  // 列表数据宽度
    const clientWidth = scrollContentRef.current.clientWidth  // 数据显示宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理
  function controlClickHandel(isRight) {
    const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posIndexRef.current = newIndex
    // 是否继续显示右侧按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandel(false)}>
          <IconArrowLeft/>
        </div>
        )}
      {showRight && (
        <button className='control right' onClick={e => controlClickHandel(true)}>
          <IconArrowRight/>
        </button>
        )}

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
      
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
