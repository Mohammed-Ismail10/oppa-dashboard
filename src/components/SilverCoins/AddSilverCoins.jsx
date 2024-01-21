import React, { useEffect, useRef, useState } from 'react';
import style from './AddSilverCoins.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function AddSilverCoins() {
  const navigate = useNavigate();

  function uploadItemsSubmit(values) {
    console.log(values);
    navigate('/app/silvercoins');
  }

  let formik = useFormik({
    initialValues: {

    },
    onSubmit: uploadItemsSubmit
  });





  return (
    <>
      <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100 pt-5'>
        <div>

          {/* the rest of form */}
          <div className="row">
            <div className="col-6 pb-4">
              <label className='fs15 pb-2' htmlFor="fullName">معرف الــ (ID)</label>
              <input className={`${style.holder} py-3 form-control`} name='fullName' type="number" id='fullName' placeholder='(ID) الرجاء إدخال معرف الــ' />
            </div>
            <div className="col-6 pb-4">
              <label className='fs15 pb-2' htmlFor="userName">الكوينز</label>
              <input className={`${style.holder} py-3 form-control`} name='userName' type="tel" id='userName' placeholder='0.00' />
            </div>
            <div className="col-6 pb-4">
              <label className='fs15 pb-2' htmlFor="userName">عملات فضية</label>
              <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='0.00' />
            </div>
            <div className="col-6 pb-4">
              <label className='fs15 pb-2' htmlFor="userName">ترتيب</label>
              <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='0.00' />
            </div>

          </div>
        </div>


        <div dir='ltr' className="col-12 py-1">
          <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">إضافة</button>
          <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
        </div>

      </form>
    </>
  )
}
