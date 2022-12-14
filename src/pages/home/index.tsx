import React, { useEffect, useState, FC, useContext } from 'react'
import ReactDom from 'react-dom'
import { Swiper, Image } from 'antd-mobile'
import { HttpGet } from '../../utils/axios'
import { Outlet, useNavigate } from 'react-router-dom'
import CarInfo from '../../components/carInfo'
import Spin from '../../components/spin/Spin'
import { store } from '../../components/main'

import './index.css'

const Home: FC = () => {
    const { setWitchCar } = useContext(store)

    const navigate = useNavigate()
    const [swiperData, setswiperData] = useState<Array<{}>>([])
    const jumpButton = (id: Number) => {
        navigate(`/home/buycar/${id}`)
        setWitchCar(id)
    }

    const items = swiperData?.map((i: any) => (
        <Swiper.Item key={i.id}>
            <div className='home_content' style={{ backgroundImage: `url(${i.picUrl})` }}>
                <div className='home_carName'>{i.name}</div>
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
                <Image className='home_img' src="https://china-community-app.tesla.cn/wechatmini/img01.png" alt='' placeholder={<Spin />} />
                <button className='home_button' onClick={viewCar}>预约试驾</button>
            </div>
            <div className='home_new'>
                <div>新手使用指南</div>
                <Image className='home_img' src="https://china-community-app.tesla.cn/wechatmini/card_bg.png" alt='' placeholder={<Spin />} />
            </div>
            {
                ReactDom.createPortal(<Outlet />, document.getElementById('root') as any)
            }
        </div>
    )
}

export default Home
