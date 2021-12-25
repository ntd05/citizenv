import '../ListData/ListData.css'
import JsonData from './Data/Data.json'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListData() {

    const url = 'http://localhost:3001/users/all'
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("");
    const [valueSearch, setValueSearch] = useState("");

    const handleOnChange = ({ target }) => {
        setSearch(target.value);
    };

    const handleOnClick = () => {
        setValueSearch(search);
    };

    const getData = () =>
        fetch(url)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])


    const DataOfCity = ['Thành phố', 'Hà Nội', 'Hồ Chí Minh', 'Hải Phòng', 'Đà Nẵng', 'Hà Giang', 'Cao Bằng', 'Lai Châu', 'Lào Cai', 'Tuyên Quang', 'Lạng Sơn', 'Bắc Kạn', 'Thái Nguyên', 'Yên Bái'];

    return (
        <div className="containerListData">
            <div className="HeaderListData">
                <div>
                    <p>Danh sách dân số</p>
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example" onChange={handleOnChange}>
                        {DataOfCity.map((option) => (
                            <option>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button onClick={handleOnClick}>Ghi nhận</button>
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
                        {(data?.filter((val) => {
                            if (valueSearch == "") {
                                return val
                            }
                            else if (val.Address.includes(valueSearch)) {
                                return val;
                            }
                        }).map((val, key) => {
                            console.log(val.name);
                            return (
                                <tr>
                                    <td>{val._id}</td>
                                    <td>{val.CMND}</td>
                                    <td>{val.name}</td>
                                    <td>{val.DofB}</td>
                                    <td>{val.Sex}</td>
                                    <td>{val.Address}</td>
                                    <td>{val.religion}</td>
                                    <td>{val.EduLevel}</td>
                                    <td>{val.Job}</td>
                                    <td className="selectDB">
                                        <button>xóa</button>
                                        <button>sửa</button>
                                        <button>thêm</button>
                                    </td>
                                </tr>
                            )

                        }))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
