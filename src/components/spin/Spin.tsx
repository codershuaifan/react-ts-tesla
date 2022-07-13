import React from 'react'
import { SpinLoading } from 'antd-mobile'
import './index.css'

export default function Spin() {
    return (
        <div className='spin_main'>
            <SpinLoading color='currentColor'/>
            <span style={{marginLeft:'5px'}}>图片加载中...</span>
        </div>
    )
}
