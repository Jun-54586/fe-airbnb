import React, { memo, useCallback, useState  } from 'react'
import PropTypes from 'prop-types'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Warpper } from './style'

const HomeSectionV2 = memo(function HomeSectionV2(props) {

  const { infoData } = props

  const initialName = Object.keys(infoData.dest_list)[0]
  
  const [name, setName] = useState(initialName)

  // 数据转换
  const tabNames = infoData?.dest_address?.map(item => item.name)

  // 传递给子组件一个函数
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Warpper className='discount'>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list[name]} itemWidth="33.33%"/>
    </SectionV2Warpper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object

}

export default HomeSectionV2
