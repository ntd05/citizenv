
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../store/dataReducer';
import '../css/Login.css'

export default function Login(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState("");

    const handleOnChange = ({ target }) => {
        setState(target.value);
    };

    const handleOnGetData = event => {
        //dispatch(addToCart({ product }));
        event.preventDefault();
        dispatch(getData(state));
        navigate("/page")
    };

    return (
        <div className="aaaa">
            <input type="text" placeholder='Nhập tên bạn' onChange={handleOnChange} />
            <button id='OK' onClick={handleOnGetData}>OK bede</button>
        </div>

    );
}

