import '../Introduce/Introduce.css'
import React from 'react'

export default function Introduce() {
    return (
        <div className='intr'>
            <div>
                <h1>Giới thiệu</h1>
            </div>
            <div className='cont'>
                <div><span id='tit'> &emsp;CitizenV là ứng dụng web được phát triển nhằm phục vụ công tác điều tra dân số trên toàn quốc. Khi được áp dụng, hệ thống sẽ giúp việc khai báo, nhập liệu, tổng hợp và phân tích dữ liệu về dân số một cách thuận tiện.</span></div>
                <div>
                    <h3>1.Đối tượng</h3>
                    <span>
                        &emsp;- A1. Tổng cục Dân số thuộc Bộ Y tế
                        <br></br>
                        &emsp;- A2. Chi cục dân số thuộc Sở Y tế các tỉnh/thành phố
                        <br></br>
                        &emsp;- A3. Công chức thực hiện công tác dân số tại Phòng Y tế các huyện/quận
                        <br></br>
                        &emsp;- B1. Viên chức dân số thuộc Trạm Y tế xã/phường.
                        <br></br>
                        &emsp;- B2. Cộng tác viên dân số tại các thôn, bản, tổ dân phố.
                    </span>
                </div>
                <div>
                    <h3>2.Thông tin về mỗi người dân </h3>
                    <span>
                    &emsp;- Số CCCD/CMND (với người đã được cấp)<br></br>
                    &emsp;  - Họ và tên<br></br>
                    &emsp;  - Ngày sinh<br></br>
                    &emsp;  - Giới tính<br></br>
                    &emsp;  - Quê quán<br></br>
                    &emsp;   - Địa chỉ thường trú<br></br>
                    &emsp;  - Địa chỉ tạm trú<br></br>
                    &emsp;  - Tôn giáo<br></br>
                    &emsp;  - Trình độ văn hóa<br></br>
                    &emsp;  - Nghề nghiệp<br></br>
                    </span>
                </div>
                <div>
                    <h3>3.Các chức năng chính</h3>
                    <p>
                        A1
                       
                    A2
                   
                    A3
                   
                    B1
                   
                    B2
                   
                </p>
                </div>
            </div>
        </div>
    )
}
