import React, { useState } from 'react';
import logo from '../../Assets/Images/Group 1000002471.png';
import style from './login.module.css';

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);




  return (
    <>
      <section>
        <div className='d-flex mx-auto w-75 vh-100 align-items-center justify-content-center'>
          <div className='w-50'>
            <div className='text-center'>
              <img src={logo} alt="Oppa logo" width={100} loading='lazy' />
              <h2 className='fw-bold'>Login</h2>
            </div>
            <div>
              <form>
                <label htmlFor='email'>بريد إلكتروني</label>
                <input placeholder='عنوان البريد الإلكتروني أو رقم الهاتف' className='form-control border-1 shadow-none my-2 text-body-tertiary fw-bold' id='email' type="email" />

                <div className='position-relative'>
                  <label htmlFor='password'>كلمة المرور </label>
                  <input placeholder='كلمة المرور' className='form-control border-1 shadow-none mt-2 text-body-tertiary fw-bold' id='password' type={`${showPassword ? 'text' : 'password'}`} />
                  <button onClick={() => setShowPassword(!showPassword)} type='button' className='bg-transparent border-0 position-absolute end-0 bottom-0 mb-1 me-1 text-secondary'>
                    {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                  </button>
                </div>

                <button type='submit' className={`${style.bgBtn} text-white w-100 btn mt-4 fw-bold`}>تسجيل الدخول</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
