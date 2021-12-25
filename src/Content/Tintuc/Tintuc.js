import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import React from 'react'
import Tt1 from "./Tt1";
import Tt2 from "./Tt2";
import Tt5 from "./Tt5";
import Tt4 from "./Tt4";
import Tt3 from "./Tt3";

export default function Tintuc() {
    return (
        <div>
            <Routes>
                <Route exact path='vai-tro-cua-tong-dieu-tra-dan-so-va-nha-o-doi-voi-su-phat-trien-cua-moi-quoc-gia' element={<Tt1/>}/>
                <Route exact path='thanh-pho-ha-noi-tong-ket-cong-tac-tong-dieu-tra-dan-so-va-nha-o-nam-2019' element={<Tt2/>}/>
                <Route exact path='tphcm-cong-bo-ket-qua-so-bo-tong-dieu-tra-dan-so-va-nha-o-nam-2019' element={<Tt3/>}/>
                <Route exact path='cong-bo-ket-qua-tong-dieu-tra-dan-so-2019' element={<Tt4/>}/>
                <Route exact path='tong-cuc-thong-ke-nhan-giai-thuong-co-quan-nha-nuoc-chuyen-doi-so-xuat-sac' element={<Tt5/>}/>
            </Routes>
        </div>
    )
}
