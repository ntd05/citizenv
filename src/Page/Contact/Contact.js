import '../Contact/Contact.css'
import React from 'react'
import Vitri from '../Contact/vitri.png'

export default function Contact() {
    return (
        <div className='cont'>
            <h1>Liên hệ</h1>
            <div className='lh'>
                <div id='lk-left'>
                    <h2>Hỗ trợ</h2>
                    <span>
                        &emsp;Hãy liên hệ với CitizenV để chúng tôi có thể tư vấn trực tiếp cho bạn về sản phẩm và dịch vụ bạn quan tâm. Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn !
                        <br></br>
                    </span>
                    <span id='ema'>
                        Địa chỉ:
                        <br></br>
                        Đường dây nóng:
                        <br></br>
                        Email:
                    </span>
                </div>
                <div id='lk-right'>
                    <h2>Trụ sở chính</h2>
                    <img src={Vitri}></img>
                </div>
            </div>
        </div>
    )
}
