import React, { useEffect, useState } from 'react'
import { HttpGet } from '../../utils/axios'
import News from '../../components/news'
import { InfiniteScroll } from 'antd-mobile'
import './index.css'

export default function Find() {
  const [newsList, setNewsList] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [loadNumber, setLoadNumber] = useState<number>(2)
  useEffect(() => {
    HttpGet('/find/1').then((res: any) => {
      setNewsList(res?.newsList)
    })
  }, [])
  const loadMore = async () => {
    const newRes: any = await HttpGet(`/find/${loadNumber}`)
    setLoadNumber(value => value + 1)
    setNewsList(val => [...val, ...newRes?.newsList])
    setHasMore(newRes?.newsList?.length)
  }
  return (
    <div className='find_body'>
      <div className="teslaFind">
        <img className='find_main_img' src='https://china-community-app.tesla.cn/community-media/de6f422a-4c62-4a90-a5b0-c7460783bf4b.png' />
      </div>
      {
        newsList?.map((i: any) => {
          return <News params={i} />
        })
      }
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
