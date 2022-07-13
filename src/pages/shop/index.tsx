import React, { useEffect, useState } from 'react'
import { Swiper,Image } from 'antd-mobile'
import { HttpGet } from '../../utils/axios'
import { Outlet, useNavigate } from 'react-router-dom'
import Spin from '../../components/spin/Spin'
import './index.css'

export default function Shop() {
  const [card, setCard] = useState<any>()
  const navigate = useNavigate()
  const shopList = (params: any) => {
    navigate(`/shop/shoplist/${params.id}`, {
      state: params
    })
  }
  const shopinfo = () => {
    navigate('/shop/shopinfo', {
      state: card?.goods
    })
  }
  const items = card?.TZONE?.map((i: any) => (
    <Swiper.Item key={i.id}>
      <div className='shop_box' onClick={() => shopList(i)}>
        <Image className='shop_content' src={i.picUrl} alt='' placeholder={<Spin />}/>
      </div>
    </Swiper.Item>
  ))
  useEffect(() => {
    HttpGet('/shop').then((res: any) => {
      setCard(res)
    })
  }, [])
  return (
    <div >
      <img src="https://china-community-app.tesla.cn/wechatmini/shop.png" className='show_main_img' onClick={shopinfo} />
      <div className='shop_title'>T - ZONE</div>
      <Swiper slideSize={80} trackOffset={10} stuckAtBoundary={false}
        className='shop_swiper' indicator={() => null}
      >
        {items}
      </Swiper>
      <Outlet />
    </div>
  )
}
