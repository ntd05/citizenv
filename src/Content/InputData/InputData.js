import '../InputData/InputData.css'
import DeclareForm from './Body/DeclareForm'
import PrintDeclare from './Body/PrintDeclare'
import { useState } from 'react';
import { background, color } from '@chakra-ui/react';

export default function InputData() {
    const [flag, setFlag] = useState(true);

    return (
        <div className='containerInData'>
            <div className='MainInData'>
                <div>
                    <p>Khai báo thông tin</p>
                </div>
                <div className='HeaderInData'>
                    <button className='inData' 
                    onClick={()=> {setFlag(true)}}
                    style={{
                        backgroundColor: flag === true ? "white" : "rgb(218, 247, 236)"
                    }}>
                        Nhập dữ liệu
                    </button>
                    <button className='printDeclaration' 
                    onClick={()=> setFlag(false)}
                    style={{
                        backgroundColor: flag === false? "white" : "rgb(218, 247, 236)"
                    }}>
                        Mẫu phiếu điều tra
                    </button>
                </div>
                <div className='BodyInData'>
                    {flag ? <DeclareForm/> : <PrintDeclare/> }
                </div>
            </div>
        </div>
    )
}
