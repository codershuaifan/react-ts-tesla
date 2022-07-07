import React from 'react'
import { Navigate } from 'react-router-dom'
import { routerType } from '../interface'

import Find from "../pages/find"
import Home from "../pages/home"
import BuyCar from '../pages/home/components/buyCar'
import Map from "../pages/map"
import Shop from "../pages/shop"
import ShopList from '../pages/shop/components/shoplist'
import ShopInfo from '../pages/shop/components/shopinfo'
import User from '../pages/user'
import View from '../pages/home/components/view'

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
                {
                    path: '/shop/shopinfo',
                    element: <ShopInfo />
                }
            ]
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
