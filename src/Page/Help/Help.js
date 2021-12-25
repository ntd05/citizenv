import '../Help/Help.css'
import React from 'react'

export default function Help() {
    return (
        <div className='help'>
             <div>
                <h1>Hướng dẫn</h1>
            </div>
            <div className='sear'>
                <input type="text" placeholder="Tìm kiếm..."/>
                <button id='s-but'>
                    <img src='http://online.gov.vn/Content/EndUser/img/search.png'></img>
                </button>
            </div>
            <div className='he-qa'>
                <img src='http://online.gov.vn/Content/EndUser/img/QandA.png'/>
                <a href=''>Quy trình đăng ký tài khoản</a>
            </div>
            <div className='he-qa'>
                <img src='http://online.gov.vn/Content/EndUser/img/QandA.png'/>
                <a href=''>Hướng dẫn khai báo</a>
            </div>
            <div className='he-qa'>
                <img src='http://online.gov.vn/Content/EndUser/img/QandA.png'/>
                <a href=''>Hướng dẫn sử dụng các chức năng của hệ thống</a>
            </div>
            <div className='he-qa'>
                <img src='http://online.gov.vn/Content/EndUser/img/QandA.png'/>
                <a href=''>Hướng dẫn sử lý khi quên mật khẩu </a>
            </div>
        </div>
    )
}
