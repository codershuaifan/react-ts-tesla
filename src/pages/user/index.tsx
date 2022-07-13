import React from 'react'
import './index.css'

export default function User() {
  return (
    <div className='user_body'>
      <img src={require('@/assets/img/用户.jpeg')} alt='' className='user_img' />
      <div className='user_main'>
        <div>与Tesla一起</div>
        <div>加速世界向可持续能源的转变</div>
        <div className='user_but'>登陆</div>
      </div>
      <div className='user_footer'>隐私与法律</div>
    </div>
  )
}

