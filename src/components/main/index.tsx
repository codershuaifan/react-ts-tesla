import React, { useEffect, useState } from 'react'
import { useLocation, useRoutes, useNavigate } from 'react-router-dom'
import UseRouterList from '../../routes'
import { TabBar } from 'antd-mobile'
import './index.css'

// const nameList: any = {
//     '/find': '发现',
//     '/home': 'Tesla',
//     '/map': '地图',
//     '/shop': '商店',
//     '/user': '我的'
// }

export default function Main() {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()
    const element = useRoutes(UseRouterList())
    const tabs = [
        {
            key: '/find',
            title: '发现',
            icon: pathname !== '/find' ? <img src={require('@/assets/icon/火箭.png')} alt='' className='main_img' /> :
                <img src={require('@/assets/icon/火箭1.png')} alt='' className='main_img_v2' />,
        },
        {
            key: '/home',
            title: 'Tesla',
            icon: pathname !== '/home' ? <img src={require('@/assets/icon/车辆.png')} alt='' className='main_img' /> :
                <img src={require('@/assets/icon/车辆1.png')} alt='' className='main_img_v2' />,
        },
        {
            key: '/map',
            title: '地图',
            icon: pathname !== '/map' ? <img src={require('@/assets/icon/地图.png')} alt='' className='main_img' /> :
                <img src={require('@/assets/icon/地图1.png')} alt='' className='main_img_v2' />,
        },
        {
            key: '/shop',
            title: '商店',
            icon: pathname !== '/shop' ? <img src={require('@/assets/icon/地球.png')} alt='' className='main_img2' /> :
                <img src={require('@/assets/icon/地球1.png')} alt='' className='main_img2_v2' />,
        },
        {
            key: '/user',
            title: '我的',
            icon: pathname !== '/user' ? <img src={require('@/assets/icon/用户.png')} alt='' className='main_img2' /> :
                <img src={require('@/assets/icon/用户1.png')} alt='' className='main_img2_v2' />,
        }
    ]
    return (
        <>
            <div className='main_body'>
                {element}
            </div>
            <TabBar className='main_tabbar' onChange={value => navigate(value)} defaultActiveKey='/home'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )
}
