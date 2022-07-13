import React, { useEffect, useState, useContext } from 'react'
import ReactDom from 'react-dom'
import { Swiper } from 'antd-mobile'
import { HttpGet } from '../../utils/axios'
import { Outlet, useNavigate } from 'react-router-dom'
import CarInfo from '../../components/carInfo'
import { FullScData } from '../../App'

import './index.css'

export default function Home() {
    const value = useContext(FullScData)
    
    const navigate = useNavigate()
    const [swiperData, setswiperData] = useState<Array<{}>>([])
    const jumpButton = (id: Number) => {
        navigate(`/home/buycar/${id}`)
    }
    const handleFull = () => {
        value.enter()
    }
    const items = swiperData?.map((i: any) => (
        <Swiper.Item key={i.id}>
            <div className='home_content' style={{ backgroundImage: `url(${i.picUrl})` }}>
                <div className='home_carName' onClick={handleFull}>{i.name}</div>
                <CarInfo params={i} />
                <button className='home_buy' onClick={() => jumpButton(i.id)}>立即订购</button>
                <a className='home_know'>了解更多</a>
            </div>
        </Swiper.Item>
    ))
    useEffect(() => {
        HttpGet('/tesla').then((res: any) => {
            setswiperData(res.rotationImg)
        })
    }, [])
    //车辆预览
    const viewCar = () => {
        navigate('/home/view')
    }
    return (
        <div>
            <Swiper loop autoplay indicatorProps={{ color: 'white' }}>
                {items}
            </Swiper>
            <div className="home_main">
                <div className='home_title'>未来驾驶体验</div>
                <div className='home_des'>车辆自动召唤，跑车级百公里加速，在车里打游戏，免费到店体验特斯拉驾驶方式</div>
                <img className='home_img' src="https://china-community-app.tesla.cn/wechatmini/img01.png" alt='' />
                <button className='home_button' onClick={viewCar}>预约试驾</button>
            </div>
            <div className='home_new'>
                <div>新手使用指南</div>
                <img className='home_img' src="https://china-community-app.tesla.cn/wechatmini/card_bg.png" alt='' />
            </div>
            {
                ReactDom.createPortal(<Outlet />, document.getElementById('root') as any)
            }
        </div>
    )
}
