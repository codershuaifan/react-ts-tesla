import { type } from 'os'
import React from 'react'

type Props = {
    [propName: string]: any,
    isBuy?: Boolean
}

export default function CarInfo({ params, isBuy = false }: Props) {
    return (
        <>
            <div className={isBuy ? 'buy_carInfo' : 'home_carInfo'}>
                <div className='home_div'>
                    <div><span className='home_span'>{params?.battery}</span> 公里</div>
                    <div className='home_a2'>续航里程 (预估)</div>
                </div>
                <div className='home_div'>
                    <div><span className='home_span'>{params?.speedUp}</span> 秒</div>
                    <div className='home_a2'>百公里加速</div>
                </div>
                <div className='home_div'>
                    <div><span className='home_span'>{params?.higtSpeed}</span> 公里/小时</div>
                    <div className='home_a2'>最高车速+</div>
                </div>
            </div>
        </>
    )
}
