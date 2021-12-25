import '../LookUp/LookUp.css'
import JsonData from '../ListData/Data/Data.json'
import { useState, useEffect } from 'react';

export default function LookUp() {

    const [state, setState] = useState("");
    const [valueSearch, setValueSearch] = useState("");
    const url = 'http://localhost:3001/users/all'
    const [data, setData] = useState(null)
    const getData = () =>
        fetch(url)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const handleOnChange = ({ target }) => {
        setState(target.value);
    };

    const handleOnClick = () => {
        setValueSearch(state);
    };
    
    return (
        <div className="containerLookUp">
            <div className="HeaderLookUp">
                <div>
                    <input type="text" placeholder='Nhập CMND' onChange={handleOnChange} />
                </div>
                <div>
                    <button onClick={handleOnClick}>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyLookUp'>
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
                        </tr>
                    </thead>
                    <tbody>
                        {(data?.filter((val) => {
                            if (valueSearch == "") {
                                return val
                            }
                            else if (val._id.includes(valueSearch)) {
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
                                </tr>
                            )

                        }))}
                    </tbody>
                </table>
            </div >
        </div >
    )
}
