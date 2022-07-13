import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { routerType } from '../interface'

const Find = lazy(() => import('../pages/find'))
const Home = lazy(() => import('../pages/home'))
const BuyCar = lazy(() => import('../pages/home/components/buyCar'))
const Map = lazy(() => import('../pages/map'))
const Shop = lazy(() => import('../pages/shop'))
const ShopList = lazy(() => import('../pages/shop/components/shoplist'))
const ShopInfo = lazy(() => import('../pages/shop/components/shopinfo'))
const User = lazy(() => import('../pages/user'))
const View = lazy(() => import('../pages/home/components/view'))

export default function UseRouterList() {
    const routes: routerType[] = [
        {
            path: '/find',
            element: <Find />,
        },
        {
            path: '/home',
            element: <Home />,
            children: [
                {
                    path: '/home/view',
                    element: <View />
                }
            ]
        },
        {
            path: '/home/buycar/:id',
            element: <BuyCar />
        },
        {
            path: '/map',
            element: <Map />
        },
        {
            path: '/shop',
            element: <Shop />,
            children: [
                {
                    path: '/shop/shoplist/:id',
                    element: <ShopList />
                },
            ]
        },
        {
            path: '/shop/shopinfo',
            element: <ShopInfo />
        },
        {
            path: '/user',
            element: <User />
        },
        {
            path: '/',
            element: <Navigate to='/home' />
        }
    ]

    return routes
}
