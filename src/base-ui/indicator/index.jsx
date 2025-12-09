import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { IndicatorWrapper } from './style'

const Indicator = memo(function Indicator(props) {

    const { selectIndex } = props
    const contentRef = useRef()

    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth
        const contentWidth = contentRef.current.clientWidth
        
        const distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
        contentRef.current.style.transform = `translate(${-distance}px)`
        

    }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
            props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator
