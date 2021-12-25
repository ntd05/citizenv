import '../ListData/ListData.css'
import JsonData from './Data/Data.json'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListData() {
    const url = 'http://localhost:3001/users/all'
    const [data, setData] = useState(null)
    const getData = () =>
        fetch(url)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const DisplayData = data?.map((info) => {
        return (
            <tr>
                <td>{info._id}</td>
                <td>{info.CMND}</td>
                <td>{info.name}</td>
                <td>{info.DofB}</td>
                <td>{info.Sex}</td>
                <td>{info.Address}</td>
                <td>{info.religion}</td>
                <td>{info.EduLevel}</td>
                <td>{info.Job}</td>
                <td className="selectDB">
                    <button>xóa</button>
                    <button>sửa</button>
                    <button>thêm</button>
                </td>
            </tr>
        )
    })


    const DataOfCity = ['Thành phố', 'Hà Nội', 'TP Hồ Chí Minh', 'Hải Phòng', 'Đà Nẵng', 'Hà Giang', 'Cao Bằng', 'Lai Châu', 'Lào Cai', 'Tuyên Quang', 'Lạng Sơn', 'Bắc Kạn', 'Thái Nguyên', 'Yên Bái'];
    const DataOfHuyen = ['Quận/Huyện/Thị xã', "Bình Chánh", "Bình Tân", "Bình Thạnh", "Cầu Giấy", "Chương Mỹ", "Đan Phượng", "Đông Anh", "Long Biên", "Hoàng Sa", "Liên Chiểu", "Ngũ Hành Sơn", "Sơn Trà", "Tân Uyên", "Thủ Dầu Một", "Định Quán"];
    const DataOfXa = ['Xã/Phường/Thị trấn', "An Phú Tây", "Bình Chánh", "Bình Hưng", "Bình Lợi", "Đa Phước", "Hưng Long", "Lê Minh Xuân", "Phạm Văn Hai", "Phong Phú", "Quy Đức", "Tân Kiên", "Tân Nhựt", "Tân Quý Tây", "Tân Túc", "Vĩnh Lộc A", "Vĩnh Lộc B", "An Lạc"];


    return (
        <div className="containerListData">
            <div className="HeaderListData">
                <div>
                    <p>Danh sách dân số</p>
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example">
                    {DataOfCity.map((option) => (
                            <option>{option}</option>
                        ))}
                    </select>
                    <select class="form-select" aria-label="Default select example">
                    {DataOfHuyen.map((option) => (
                            <option>{option}</option>
                        ))}
                    </select>
                    <select class="form-select" aria-label="Default select example">
                    {DataOfXa.map((option) => (
                            <option>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyListData'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CCCD/CMND</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Địa chỉ</th>
                            <th>Tôn giáo</th>
                            <th>Trình độ văn hóa</th>
                            <th>Nghề nghiệp</th>
                            <td>Tùy chọn</td>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
