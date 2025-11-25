import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'

const RoomItem = memo(function RoomItem(props) {

  const { itemData } = props

  return (
    <RoomItemWrapper>
      {itemData.name}
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
