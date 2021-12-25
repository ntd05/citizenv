import React from 'react'
import Logo from "../image/logo.png"
import '../topBar/topbar.css'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

export default function TopBar() {
    return (
        <div className = "top">
            <img id="logo" src={Logo}/>
            <div>
                <p id='nameWeb'>CitizenV</p>
                <p id='desWeb'>HỆ THỐNG ĐIỀU TRA DÂN SỐ</p>
            </div>
            <div className="login">
                <Link to ="/Login"><button id = 'log'>Đăng nhập</button></Link>
            </div>
        </div> 
    )
}
