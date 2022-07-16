import React, { Suspense, createContext, useEffect, useState } from 'react'
import { useLocation, useRoutes, useNavigate } from 'react-router-dom'
import UseRouterList from '../../routes'
import { TabBar, SpinLoading } from 'antd-mobile'
import { makeObservable, observable, action, reaction } from 'mobx'
import { HttpGet } from '../../utils/axios'
import './index.css'

class CarStateStore {
    constructor() {
        makeObservable(this, {
            sourceState: observable,
            carState: observable,
            carConfig: observable,
            carColor: observable,
            giveState: action,
            giveCarConfig: action
        })
    }
    //源数据
    sourceState = null
    //单个车辆总数据
    carState: any = null
    //单个车辆配置数据
    carConfig: any = null
    //单个车辆颜色数据
    carColor = null
    //抛出车辆总数据
    giveState = (data: any, witchCar: number) => {
        !data && (data = this.sourceState)
        this.sourceState = data
        this.carState = data?.find((i: any) => i.id === witchCar)
    }
    //抛出单个车辆配置数据
    giveCarConfig = (data: any) => {
        this.carConfig = data
        //初始化车辆颜色数据
        this.giveCarColor(1)
    }
    //抛出单个车辆颜色数据
    giveCarColor = (number: number) => {
        this.carColor = this.carConfig.carColor.find((i: any) => i.id == number)
    }
}

const carStateStore = new CarStateStore()
// const nameList: any = {
//     '/find': '发现',
//     '/home': 'Tesla',
//     '/map': '地图',
//     '/shop': '商店',
//     '/user': '我的'
// }

reaction(
    () => carStateStore.carState,
    data => {
        if (data) {
            carStateStore.giveCarConfig(data.configuration[0])
        }
    }
)

const Spin = () => {
    return (
        <div className='main_spin'>
            <SpinLoading color='currentColor' style={{ '--size': '48px' }} />
            <div style={{ marginTop: '5px' }}>加载中</div>
        </div>
    )
}

export const store = createContext<any>(null)

const Main = () => {
    const [witchCar, setWitchCar] = useState<number>(1)
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
            key: '/map',
            title: '地图',
            icon: pathname !== '/map' ? <img src={require('@/assets/icon/地图.png')} alt='' className='main_img' /> :
                <img src={require('@/assets/icon/地图1.png')} alt='' className='main_img_v2' />,
        },
        {
            key: '/home',
            title: 'Tesla',
            icon: pathname !== '/home' ? <img src={require('@/assets/icon/车辆.png')} alt='' className='main_img' /> :
                <img src={require('@/assets/icon/车辆1.png')} alt='' className='main_img_v2' />,
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
    useEffect(() => {
        HttpGet('/tesla').then((res: any) => {
            carStateStore.giveState(res.rotationImg, witchCar)
        })
    }, [])
    useEffect(() => {
        carStateStore.giveState(null, witchCar)
    }, [witchCar])
    return (
        <>
            <Suspense fallback={<Spin />}>
                <store.Provider value={{ carStateStore, setWitchCar }}>
                    <div className='main_body'>
                        {element}
                    </div>
                </store.Provider>
            </Suspense>

            <TabBar className='main_tabbar' onChange={value => navigate(value)} defaultActiveKey={pathname}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </>
    )
}
export default Main
