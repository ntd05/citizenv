import '../sideBar/sideBar.css'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Tt1 from '../Content/Tintuc/Tt1';
import { Button } from '@chakra-ui/react';

var count = 0;
const change = () => {
    var bm = document.getElementsByClassName("BodyMenu");
    if(count == 0){
        for(let i=0; i<bm.length; i++){
           bm[i].style.display="inline-block";
        }
        count++;
    }
    else {
        for(let i=0; i<bm.length; i++){
            bm[i].style.display="none";
         }
        count--
    }
}

export default function SideBar() {
    return (
        <div className='sb'>
            <Button onClick = {change}>
                &#62;&#62;
            </Button>
            <div className="BodyMenu">
                <div className="News">
                    <i class="far fa-newspaper"></i>
                    <p>
                        <Link to="/Home/News" style={{color:"white"}}>Tin tức</Link>
                    </p>
                </div>
                <div className="AreaMana">
                    <i class="fas fa-tasks"></i>
                    <p>
                        <Link to="/Home/AreaManagement" style={{color:"white"}}>Quản lý khu vực</Link>
                    </p>
                </div>
                <div className="AccessMana">
                    <i class="far fa-user-circle"></i>
                    <p>
                        <Link to="/Home/AccessManagement" style={{color:"white"}}>Quản lý truy cập</Link>
                    </p>
                </div>
                <div className="Analysis">
                    <i class="fas fa-chart-line"></i>
                    <p>
                        <Link to="/Home/Analysis" style={{color:"white"}}>Phân tích dữ liệu</Link>
                    </p>
                </div>
                <div className="LookUp">
                    <i class="fas fa-search"></i>
                    <p>
                        <Link to="/Home/LookUp" style={{color:"white"}}>Tra cứu</Link>
                    </p>
                </div>
                <div className="List">
                    <i class="fas fa-database"></i>
                    <p>
                        <Link to="/Home/ListData" style={{color:"white"}}>Danh sách</Link>
                    </p>
                </div>
                <div className="InputData">
                    <i class="far fa-edit"></i>
                    <p>
                        <Link to="/Home/InputData" style={{color:"white"}}>Nhập liệu</Link>
                    </p>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Tt1/>}/>
            </Routes>
        </div>
    )
}
