import React, { memo } from 'react'
import PropTypes from 'prop-types'

import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style'


const SectionRooms = memo(function SectionRooms(props) {

    const { roomList = [], itemWidth } = props

    return (
    <RoomsWrapper>
        {
            roomList?.slice(0, 8).map(item => {
                return <RoomItem 
                itemWidth={itemWidth} 
                itemData={item} 
                key={item.id}
                />
            })
        }
    </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms
