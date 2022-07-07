import React from 'react'
import { Modal } from 'antd-mobile'
import './index.css'

export default function News({ params }: any) {
    const showModal = () => {
        Modal.show({
            closeOnMaskClick: true,
            content: (
                <>
                    <img src={params?.picUrl} style={{ width: '100%' }} />
                    <div>
                        <h1 className='find_modal_title'>{params?.title}</h1>
                        <p>{params?.date}</p>
                    </div>
                </>
            )
        })
    }
    return (
        <div className='find_news' onClick={showModal}>
            <div>
                <h1 className='find_h1'>{params?.title}</h1>
                <p className='find_p'>{params?.date}</p>
            </div>
            <div className="find_newsRight">
                <img src={params?.picUrl} style={{ width: '100%' }} />
            </div>
        </div>
    )
}
