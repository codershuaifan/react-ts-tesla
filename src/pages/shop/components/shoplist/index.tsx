import React from 'react'
import { NavBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import './index.css'

export default function ShopList() {
  const navigate = useNavigate()
  const { state: { picUrl } }: any = useLocation()

  return (
    <div className='shoplist_body'>
      <NavBar onBack={() => navigate(-1)}>标题</NavBar>
      <img src={picUrl} className='shoplist_img' />
    </div>
  )
}
