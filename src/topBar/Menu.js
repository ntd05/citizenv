import React from 'react'
import '../topBar/topbar.css'
import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div className = "menu">
                <ul className = "menuList">
                    <li className="menuListItem">
                        <Link to='/' style={{color: "white"}}>Trang chủ</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='Ne/introduce' style={{color: "white"}}>Giới thiệu</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='Ne/help' style={{color: "white"}}>Hướng dẫn</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to='/contact' style={{color: "white"}}>Liên hệ</Link>
                    </li>
                </ul>
                <div className="search">
                    <input type="text" value ="Tìm kiếm..."/>
                    <i class="fas fa-search"></i>
                </div>
            </div>
    )
}
