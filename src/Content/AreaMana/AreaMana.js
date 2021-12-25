import '../AreaMana/AreaMana.css'

export default function AreaMana() {
    return (
        <div className="containerAreaMana">
            <div className="HeaderAreaMana">
                <div>
                    <input type="text" placeholder='Nhập mã đơn vị' />
                </div>
                <div>
                    <button>Ghi nhận</button>
                </div>
            </div>
            <div className='BodyAreaMana'>
            <h2>Quyền hạn A1</h2>
            <h1>Tỉnh X</h1>
            </div>
            <div className="inforAreaMana">
                <div>
                    <p>Hạn cuối</p>
                    <h2>1222</h2>
                </div>
                <div>
                    <p>Đang khai báo</p>
                    <h2>x đơn vị</h2>
                </div>
                <div>
                    <p>Tiến độ</p>
                    <h2>12%</h2>
                </div>
            </div>
            <div>

            </div>
            <div className="containerTable">
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn vị</th>
                            <th>Tên đơn vị</th>
                            <th>Cấp đơn vị</th>
                            <th>Tình trạng</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}
