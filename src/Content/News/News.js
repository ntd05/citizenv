import A1 from '../News/hinhanh/a1.jpg'
import A2 from '../News/hinhanh/a2.jpg'
import A3 from '../News/hinhanh/a3.jpg'
import A4 from '../News/hinhanh/a4.jpg'
import A5 from '../News/hinhanh/a5.jpg'
import '../News/News.css'
import React from 'react'

export default function News() {
    return (
        <div  className='a'>
            <h1>Tin tức</h1>
            <div>
            <img src={A1}></img>
            <div>
                <a href="News/vai-tro-cua-tong-dieu-tra-dan-so-va-nha-o-doi-voi-su-phat-trien-cua-moi-quoc-gia">Vai trò của tổng điều tra dân số và nhà ở đối với sự phát triển của mỗi quốc gia</a>
                <br></br>
                <br></br>
                <p>UNFPA là cơ quan hàng đầu của Liên Hợp Quốc cung cấp hỗ trợ cho các cuộc Tổng điều tra dân số và nhà ở trên toàn cầu. Trong Tổng điều tra Dân số chu kỳ 2010, UNFPA đã hỗ trợ 135 quốc gia, thông qua hỗ trợ kỹ thuật, tăng cường năng lực,...</p>
            </div>
            </div>
            <div>
                <img src={A2}></img>
                <div>
                    <a href='News/thanh-pho-ha-noi-tong-ket-cong-tac-tong-dieu-tra-dan-so-va-nha-o-nam-2019'>Thành phố Hà Nội Tổng kết công tác Tổng điều tra dân số và nhà ở năm 2019</a>
                    <p>Chiều ngày 11/10/2019 tại trụ sở UBND Thành phố, Ban chỉ đạo (BCĐ) Tổng điều tra dân số và nhà ở năm 2019 (TĐT) thành phố Hà Nội tổ chức Hội nghị Tổng kết Tổng điều tra dân số và nhà ở năm 2019 trên địa bàn Thành phố</p>
                </div>
            </div>
            <div>
                <img src={A3}></img>
                <div>
                    <a href='News/tphcm-cong-bo-ket-qua-so-bo-tong-dieu-tra-dan-so-va-nha-o-nam-2019'>TPHCM công bố kết quả sơ bộ “Tổng điều tra dân số và nhà ở năm 2019”</a>
                    <p> Sáng 11/10, tại UBND TPHCM, Ban chỉ đạo Tổng điều tra dân số và nhà ở năm 2019 TPHCM đã tổ chức Hội nghị Tổng kết và công bố kết quả sơ bộ “Tổng điều tra dân số và nhà ở năm 2019”</p>
                </div>
            </div>
            <div>
                <img src={A4}></img>
                <div>
                    <a href='News/cong-bo-ket-qua-tong-dieu-tra-dan-so-2019'>Công bố kết quả Tổng điều tra dân số 2019</a>
                    <p>Tổng số dân của Việt Nam vào thời điểm 0h ngày 01/4/2019 là 96.208.984 người, trong đó dân số nam là 47.881.061 người (chiếm 49,8%) và dân số nữ là 48.327.923 người (chiếm 50,2%).</p>
                </div>
            </div>
            <div>
                <img src={A5}></img>
                <div>
                    <a href='News/tong-cuc-thong-ke-nhan-giai-thuong-co-quan-nha-nuoc-chuyen-doi-so-xuat-sac'>Tổng cục Thống kê nhận giải thưởng "Cơ quan nhà nước chuyển đổi số xuất sắc"</a>
                    <p>Chiều ngày 06/9/2019, tại Hà Nội, Hội Truyền thông số Việt Nam tổ chức Lễ trao giải thưởng Chuyển đổi số Việt Nam – Vietnam Digital Awards (VDA) 2019.</p>
                </div>
            </div>
        </div>
    )
}
