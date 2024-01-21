import React, { useRef, useState } from 'react'
import style from './AddExchangeCurrencies.module.css';
import { useFormik } from 'formik';




export default function AddExchangeCurrencies() {

  function uploadItemsSubmit(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      image: null,
      type:'',
    },
    onSubmit: uploadItemsSubmit
  });









  return (
    <>
      <div className="container-fluid h-100 pt-5">

        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100'>
          <div>
            {/* the rest of form */}
            <div className="row">
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="fullName">معرف الــ (ID)</label>
                <input className={`${style.holder} py-3 form-control`} name='fullName' type="number" id='fullName' placeholder='(ID) الرجاء إدخال معرف الــ' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">عدد الماس</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='الرجاء إدخال عدد الماس' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs20 pb-2' htmlFor="type">النوع</label>
                <select name='type' value={formik.values.type} onChange={formik.handleChange} className={`text-input selCustom fs15 form-select py-3 curser-pointer fw-medium`} id="type">
                  {/* <option hidden selected >الرجاء إدخال نوع المعرف</option> */}
                  <option className={`text-main`} value="normal">كوينز</option>
                  <option className={`text-main `} value="star">مميز</option>
                </select>
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">القيمة</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="number" id='userName' placeholder='10000' />
              </div>
            </div>
          </div>


          <div dir='ltr' className="col-12 py-1">
            <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">إضافة</button>
            <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
          </div>

        </form>

      </div>
    </>
  )
}
