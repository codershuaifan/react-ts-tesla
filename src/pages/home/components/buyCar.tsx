import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { LeftOutline } from 'antd-mobile-icons'
import { Image } from 'antd-mobile'
import { HttpGet } from '../../../utils/axios'
import CarInfo from '../../../components/carInfo'
import Spin from '../../../components/spin/Spin'
import { store } from '../../../components/main'
import { observer } from 'mobx-react-lite'

import './buyCar.css'


const BuyCar = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { carStateStore: carState } = useContext(store)

  const { carState: carData, carColor, carConfig, giveCarColor, giveCarConfig } = carState

  const onback = () => {
    navigate(-1)
  }

  return (
    <div>
      <div className='buy_top'>
        <LeftOutline onClick={onback} />
        <div className='buy_design'>设计您的 {carData?.name} ｜ Tesla</div>
      </div>
      <div className="buy_main">
        <Image className='buy_img' src={carColor.configList[1].picUrl} alt='' placeholder={<Spin />} />
        <div className='buy_logo'>{carData?.name}</div>
        <div style={{ fontWeight: 400, marginTop: '18px' }}>预计交付日期：12 至 16 周</div>
        <CarInfo params={carData} isBuy={true} />
        <div className='buy_energy'>{carData?.mode}</div>
        <div className="buy_carPrice">
          <span>{carData?.name}</span>
          <span>¥{carData?.price}</span>
        </div>
        <div className='buy_detail'>
          查看详情
        </div>
        <Image className='buy_img' style={{ marginTop: '20px' }} src={carColor.configList[1].picUrl} alt='' placeholder={<Spin />} />
        <div className='buy_color'>选择颜色</div>
        <div className='buy_box'>
          {
            carData?.color.map((i: any) => {
              return <img alt='' src={i.picUrl} className='buy_ball' key={i.id}
                onClick={() => giveCarColor(i.id)} style={carColor.id === i.id ? { border: '#3E6AE1 2px solid' } : {}}
              />
            })
          }
        </div>
        <div className='buy_color' style={{ marginTop: '40px' }}>选择轮毂</div>
        <Image alt='' className='buy_head' src={carColor.configList[0].picUrl} placeholder={<Spin />} />
        <div className='buy_wheel_box'>
          {
            carData?.configuration?.map((i: any) => {
              return (
                <img alt='' className='buy_ball' src={i.picUrl} key={i.id} style={carConfig.id === i.id ? { border: '#3E6AE1 2px solid' } : {}}
                  onClick={() => giveCarConfig(i)}
                />
              )
            })
          }
        </div>
        <div style={{ margin: '20px 0 60px' }}>{carConfig?.name}</div>
      </div>
    </div>
  )
}

export default observer(BuyCar)
