import React, { useState, useContext, useEffect } from 'react'
import { Popup } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { HttpGet } from '../../../utils/axios'
import { Image } from 'antd-mobile'
import Spin from '../../../components/spin/Spin'
import './view.css'

export default function View() {
  const [data, setData] = useState<any[]>([])
  const [selectNumber, setSelectNumber] = useState<String>('0')
  const navigate = useNavigate()
  useEffect(() => {
    HttpGet('/tesla').then((res: any) => {
      setData(res.rotationImg)
    })
  }, [])
  const close = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='view_back' />
      <div className='view_main'>
        <div className="view_top">
          <span>选择车型</span>
          <CloseOutline onClick={close} />
        </div>
        {
          data.map(item => {
            return (
              <div className={selectNumber === item.id ? 'view_item view_activeItem' : 'view_item'}
                key={item.id} onClick={() => setSelectNumber(item.id)}
              >
                <span>{item.name}</span>
                <Image alt='' src={item.configuration[0].carColor[item.id].configList[1].picUrl} className='view_img' placeholder={<Spin />} />
              </div>
            )
          })
        }
        <div className='view_todo'>此功能未完善,您还不能试驾</div>
      </div>
    </>
  )
}
