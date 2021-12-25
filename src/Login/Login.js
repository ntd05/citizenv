import '../Login/Login.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../image/logo.png"
import { ModalDialog } from "react-bootstrap";
import { useState } from 'react';

export default function Login(props) {
    const [state,setState] = useState(false);
    const validationSchema = Yup.object().shape({
        Email: Yup.string().required('Vui lòng điền id!').matches(),
        Password: Yup.string().required('Vui lòng điền mật khẩu!').matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
    });
    console.log(props)
    const formik = useFormik({

        initialValues: {
            Email: "",
            Password: ""
        },
        validationSchema,
    });
    return (
        <div className="aaaa">
            <ModalDialog>
            <form className='formLogin' onSubmit={formik.handleSubmit}>
                        <div>
                            <img src={Logo} />
                        </div>
                        <div>
                            <span>Đăng nhập</span>
                        </div>
                        <div className='EmailInput'>
                            <div>
                                <input value={formik.values.Email}
                                    onChange={formik.handleChange}
                                    name="Email"
                                    placeholder='Email'
                                />
                            </div>

                            {formik.errors.Email && formik.touched.Email && (
                                <div className="warn">{formik.errors.Email}</div>
                            )}
                        </div>
                        <div className='PasswordInput'>
                            <input value={formik.values.Password}
                                onChange={formik.handleChange}
                                name="Password"
                                placeholder='Mật khẩu'
                                type="password"
                            />
                            {formik.errors.Password && formik.touched.Password && (
                                <div className="warn">{formik.errors.Password}</div>
                            )}
                        </div>
                        <div className='RePassword'>
                            <input type="checkbox" />
                            <label id='RePass'>Ghi nhớ mật khẩu</label>
                        </div>
                        <div className='Login'>
                            <button type="submit">Đăng nhập</button>
                        </div>
                        <div className='Signin'>
                            <a href=''>Đăng ký tài khoản</a>
                            <br />
                            <br />
                            <a href=''>Quên mật khẩu</a>
                        </div>
                    </form>     
            </ModalDialog>
                      
            </div>

    );
}

