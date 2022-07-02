import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LeftOutline } from 'antd-mobile-icons'
import { HttpGet } from '../../../utils/axios'
import CarInfo from '../../../components/carInfo'

import './buyCar.css'

export default function BuyCar() {
  const [data, setData] = useState<any>(null)
  const [carConfig, setCarConfig] = useState<any>({})
  const [selectCarColor, setSelectCarColor] = useState<number>(1)
  const [selectCarWheel, setSelectCarWheel] = useState<number>(1)
  const navigate = useNavigate()
  const { id } = useParams()
  const onback = () => {
    navigate(-1)
  }

  useEffect(() => {
    HttpGet('/tesla').then((res: any) => {
      const rotationImg = res?.rotationImg?.find((i: any) => i.id == id)
      setData(rotationImg)
      setCarConfig(rotationImg?.configuration[0])
    })
  }, [])

  const chooseWheel = (id: number) => {
    setSelectCarWheel(id)
    setCarConfig(data?.configuration[id - 1])
  }

  return (
    <div>
      <div className='buy_top'>
        <LeftOutline onClick={onback} />
        <div className='buy_design'>设计您的 {data?.name} ｜ Tesla</div>
      </div>
      <div className="buy_main">
        <img className='buy_img' src={carConfig?.carColor?.[selectCarColor - 1]?.configList?.[1]?.picUrl} alt='' />
        <div className='buy_logo'>{data?.name}</div>
        <div style={{ fontWeight: 400, marginTop: '18px' }}>预计交付日期：12 至 16 周</div>
        <CarInfo params={data} isBuy={true} />
        <div className='buy_energy'>{data?.mode}</div>
        <div className="buy_carPrice">
          <span>{data?.name}</span>
          <span>¥{data?.price}</span>
        </div>
        <div className='buy_detail'>
          查看详情
        </div>
        <img className='buy_img' style={{ marginTop: '20px' }} src={carConfig?.carColor?.[selectCarColor - 1]?.configList?.[1]?.picUrl} alt='' />
        <div className='buy_color'>选择颜色</div>
        <div className='buy_box'>
          {
            data?.color.map((i: any) => {
              return <img alt='' src={i.picUrl} className='buy_ball' key={i.id}
                onClick={() => setSelectCarColor(i.id)} style={selectCarColor === i.id ? { border: '#3E6AE1 2px solid' } : {}}
              />
            })
          }
        </div>
        <div className='buy_color' style={{ marginTop: '40px' }}>选择轮毂</div>
        <img alt='' className='buy_head' src={carConfig?.carColor?.[selectCarColor - 1]?.configList?.[0]?.picUrl} />
        <div className='buy_wheel_box'>
          {
            data?.configuration?.map((i: any) => {
              return (
                <img alt='' className='buy_ball' src={i.picUrl} key={i.id} style={selectCarWheel === i.id ? { border: '#3E6AE1 2px solid' } : {}}
                  onClick={() => chooseWheel(i.id)}
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
