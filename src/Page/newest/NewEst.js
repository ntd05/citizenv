import './NewEst.css'
import Introduce from '../Introduce/Introduce'
import React from 'react'
import Help from '../Help/Help'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import A1 from './hinhanh/a1.jpg'
import A2 from './hinhanh/a2.jpg'
import A3 from './hinhanh/a3.jpg'
import A4 from './hinhanh/a4.jpg'
import A5 from './hinhanh/a5.jpg'


export default function NewEst() {
    return (
        <div className='nes'>
            {/*<Introduce/>*/}
            {/*<Help/>*/}
            <Routes>
                <Route path='help' element={<Help/>}/>
                <Route path='introduce' element={<Introduce/>}/>
            </Routes>
            <div className='ne'>
                <h1>Tin mới nhất</h1>
                <div>
                <img src={A1}></img>
                <div>
                    <a href="News/vai-tro-cua-tong-dieu-tra-dan-so-va-nha-o-doi-voi-su-phat-trien-cua-moi-quoc-gia">Vai trò của tổng điều tra dân số và nhà ở đối với sự phát triển của mỗi quốc gia</a>
                    <br></br>
                    <br></br>
                </div>
                </div>
                <div>
                    <img src={A2}></img>
                    <div>
                        <a href='News/thanh-pho-ha-noi-tong-ket-cong-tac-tong-dieu-tra-dan-so-va-nha-o-nam-2019'>Thành phố Hà Nội Tổng kết công tác Tổng điều tra dân số và nhà ở năm 2019</a>
                    </div>
                </div>
                <div>
                    <img src={A3}></img>
                    <div>
                        <a href='News/tphcm-cong-bo-ket-qua-so-bo-tong-dieu-tra-dan-so-va-nha-o-nam-2019'>TPHCM công bố kết quả sơ bộ “Tổng điều tra dân số và nhà ở năm 2019”</a>
                    </div>
                </div>
                <div>
                    <img src={A4}></img>
                    <div>
                        <a href='News/cong-bo-ket-qua-tong-dieu-tra-dan-so-2019'>Công bố kết quả Tổng điều tra dân số 2019</a>
                    </div>
                </div>
                <div>
                    <img src={A5}></img>
                    <div>
                        <a href='News/tong-cuc-thong-ke-nhan-giai-thuong-co-quan-nha-nuoc-chuyen-doi-so-xuat-sac'>Tổng cục Thống kê nhận giải thưởng "Cơ quan nhà nước chuyển đổi số xuất sắc"</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



