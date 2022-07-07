import React, { memo } from 'react'
import { Map as Tmap, APILoader, ScaleControl, ToolBarControl, ControlBarControl, Geolocation } from '@uiw/react-amap';
import { SearchBar } from 'antd-mobile'
import './index.css'

export default memo(() => {
  return (
    <div className='map_main'>
      <APILoader version="2.0.5" akay="a7a90e05a37d3f6bf76d4a9032fc9129">
        <Demo />
      </APILoader>
    </div>
  )
})

const Demo = memo(() => (
  <div style={{ width: '100%', height: '100%' }}>
    <SearchBar placeholder='请输入内容' className='map_search' />
    <Tmap>
      <ScaleControl offset={[16, 30]} position="LB" />
      <ToolBarControl offset={[16, 10]} position="RB" />
      <ControlBarControl offset={[16, 180]} position="RB" />
      <Geolocation
        maximumAge={100000}
        borderRadius="5px"
        position="RB"
        offset={[16, 80]}
        zoomToAccuracy={true}
        showCircle={true}
      />
    </Tmap>
  </div>
))