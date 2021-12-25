import '../AccessMana/AccessMana.css'
import JsonData from '../ListData/Data/Data.json'
import { useState } from 'react';

export default function AccessMana() {

    const [state, setState] = useState("");
    const [isOpen, setOpen] = useState(false);

    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.STT}</td>
                    <td>{info.CMND}</td>
                    <td>{info.name}</td>
                    <td>{info.DofB}</td>
                    <td>{info.Sex}</td>
                    <td>{info.Address}</td>
                    <td>{info.religion}</td>
                    <td>{info.EduLevel}</td>
                    <td>{info.Job}</td>
                </tr>
            )
        }
    )

    return (
        <div className="containerAccessMana">
            <div className="HeaderAccessMana">
                <div>
                    <input type="text" placeholder='Tìm mã đơn vị' onChange={e => setState(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => setOpen(true)}>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyAccessMana'>
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn vị</th>
                            <th>Tên đơn vị</th>
                            <th>Cấp đơn vị</th>
                            <th>Tài khoản</th>
                            <th>Mật khẩu</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                    {isOpen && (JsonData.filter((val) => {
                        if (state == "") {
                            return val
                        }
                        else if (val.IDofDV.includes(state)) {
                            return val;
                        }
                    }).map((val, key) => {
                        console.log(val.name);
                        <tr>
                            <td>{val.IDofDV}</td>
                            <td>{val.NameofDV}</td>
                            <td>{val.LevelofDV}</td>
                            <td>{val.userDV}</td>
                            <td>{val.passDV}</td>
                            <td>{val.selectDV}</td>
                        </tr>
                    }))}
                    </tbody>
                </table>
            </div >
        </div >
    )
}
