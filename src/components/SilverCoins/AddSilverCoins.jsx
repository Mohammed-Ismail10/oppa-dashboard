import React, { useEffect, useRef, useState } from 'react';
import style from './AddSilverCoins.module.css';
import { useFormik } from 'formik';

export default function AddSilverCoins() {

  function uploadItemsSubmit(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {

    },
    onSubmit: uploadItemsSubmit
  });





  return (
    <>
      <form className='w-75 pt-5 ms-4 d-flex flex-column justify-content-between h-100' onSubmit={formik.handleSubmit}>
        <div>

          <div className="row pe-5 me-5 mt-5">
            <div className="col-6 pb-4">
              <label className='fs15 pb-1' htmlFor="nameGift">إسم الــ ID</label>
              <input className={`${style.holder} form-control py-3`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.giftName}
                name='giftName'
                type="text"
                id='nameGift'
                placeholder='الرجاء إدخال إسم الــ ID' />
            </div>

            <div className="col-6 pb-4">
              <label className='fs15 pb-1' htmlFor="expired">الكوينز</label>
              <input className={`${style.holder} py-3 form-control`} name='time' type="number" id='expired' placeholder='0.00' />
            </div>

            <div className="col-6 pb-4">
              <label className='fs15 pb-1' htmlFor="price">عملات فضية</label>
              <input className={`${style.holder} py-3 form-control`} name='price' type="number" id='price' placeholder='0.00' />
            </div>

            <div className="col-6 pb-4">
              <label className='fs15 pb-1' htmlFor="getGift">ترتيب</label>
              <input className={`${style.holder} py-3 form-control`} name='getgift' type="number" id='getGift' placeholder='0.00' />
            </div>


          </div>
        </div>


        <div dir='ltr' className="col-12 py-1 ms-5">
          <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">إضافة</button>
          <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
        </div>


      </form>
    </>
  )
}
