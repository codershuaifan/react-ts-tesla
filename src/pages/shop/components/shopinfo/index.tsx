import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar, Rate } from 'antd-mobile'
import { SmileOutline } from 'antd-mobile-icons'
import './index.css'
import { type } from 'os'

type LoRE = {
    state: any
}

export default function ShopInfo() {
    const { state }: LoRE = useLocation()
    const navigate = useNavigate()
    return (
        <div>
            <NavBar onBack={() => navigate(-1)}>Tesla官方商城｜Tesla</NavBar>
            <div className='shopinfo_footer' />
            <div className="shopinfo_header">
                <div className="shopinfo-header-left">
                    <img src={require('@/assets/img/Tesla.png')} alt='' style={{ width: '50%' }} />
                    <div className='shopinfo-header-line'>|</div>
                    <div className='shopinfo-header-shop'>商店</div>
                </div>
                <div className="shopinfo-header-right">
                    <img src={require('@/assets/img/购物车.png')} alt='' className='shopinfo-header-img' />
                    <div className='shopinfo-header-name'>导航栏</div>
                </div>
            </div>
            <div className="shopinfo-main">
                <div className="shopinfo-main-text">
                    <h1 className='shopinfo-h1'>点击购买 家庭充电服务包</h1>
                    <h2 className='shopinfo-h2'>随时在家为特斯拉充电</h2>
                </div>
            </div>
            <div className="shopinfo-box-title">
                <h3 className='shopinfo-box-h3'>畅销商品</h3>
                <a className='shopinfo-box-a'>查看全部</a>
            </div>
            {
                state?.map((item: any) => {
                    return (
                        <div key={item.id} className="shopinfo-container" >
                            <div className="shopinfo-name">
                                <h3 style={{ color: `${item.color}` }}>{item.title}</h3>
                            </div>
                            <img src={item.picUrl} className='shopinfo-img' />
                        </div>
                    )
                })
            }
            <Rate allowHalf defaultValue={2} character={<SmileOutline />} className='shopinfo-view'/>
        </div>
    )
}
