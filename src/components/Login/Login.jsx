import React, { useState } from 'react';
import logo from '../../Assets/Images/Group 1000002471.png';
import style from './login.module.css';
import { useFormik } from 'formik';

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);


  function loginSubmit(values) {
    console.log(values)
  }




  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: loginSubmit
  });














  return (
    <>
      <section>
        <div className='d-flex mx-auto w-75 vh-100 align-items-center justify-content-center'>
          <div className='w-50'>
            <div className='text-center'>
              <img src={logo} alt="Oppa logo" width={100} loading='lazy' />
              <h2 className={`${style.fs35} fw-normal my-4 pt-2`}>تسجيل الدخول</h2>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor='email'>بريد إلكتروني</label>
                  <input
                    placeholder='عنوان البريد الإلكتروني أو رقم الهاتف'
                    className={`${style.textInput} form-control border-1 shadow-none my-2 fw-bold py-3 rounded-4`}
                    id='email'
                    type="email"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                </div>

                <div className='position-relative pt-2 pb-3'>
                  <label htmlFor='password'>كلمة المرور </label>
                  <input
                    placeholder='كلمة المرور'
                    className={`${style.textInput} form-control border-1 shadow-none mt-2 fw-bold py-3 rounded-4`}
                    id='password'
                    type={`${showPassword ? 'text' : 'password'}`}
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                  {showPassword ? <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${style.textEye} fa-regular fa-eye position-absolute end-0 top-50 mt-2 me-3 curser-pointer`}></i> :
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`${style.textEye} fa-regular fa-eye-slash position-absolute end-0 top-50 mt-2 me-3 curser-pointer`}></i>}
                </div>

                <button type='submit' className={`${style.bgBtn} ${style.fs18} text-white w-100 btn mt-4 fw-bold py-2 rounded-3`}>تسجيل الدخول</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
