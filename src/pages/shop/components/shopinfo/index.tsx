import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import './index.css'

export default function ShopInfo() {
    const { state } = useLocation()
    const navigate = useNavigate()
    return (
        <div className='shopinfo_body'>
            <NavBar onBack={() => navigate(-1)}>Tesla官方商城｜Tesla</NavBar>
            <div className="shop-header">
                <div className="shop-header-left">
                    <img src='' />
                    <span>|</span>
                    <span>商店</span>
                </div>
                <div className="shop-header-right">
                    {/* <svg viewBox="0 0 1024 1024" p-id="7071"><path d="M289.92 768c2.56 0 632.32 0 639.36 0 14.72 0 26.24-12.8 28.16-28.8 0 0 43.52-244.48 64-413.44C1027.2 279.04 1004.8 256 961.92 256L264.96 256 253.44 156.16C251.52 140.8 240.64 128 226.56 128 224.64 128 97.92 128 97.92 128c-17.92 0-32 14.08-32 32 0 17.92 14.08 32 32 32l99.84 0 64.64 547.2C263.68 755.2 275.84 768 289.92 768zM960.64 320c-17.28 135.68-46.08 316.16-57.6 384L318.08 704 272.64 320 960.64 320zM321.92 832c-35.2 0-64 28.8-64 64 0 35.2 28.8 64 64 64 35.2 0 64-28.8 64-64C385.92 860.8 357.12 832 321.92 832zM897.92 832c-35.2 0-64 28.8-64 64 0 35.2 28.8 64 64 64 35.2 0 64-28.8 64-64C961.92 860.8 933.12 832 897.92 832z" p-id="7072" fill={currentColor}></path></svg> */}
                    <span>导航栏</span>
                </div>
            </div>
        </div>
    )
}
