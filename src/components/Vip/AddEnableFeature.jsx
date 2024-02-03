import React from 'react'
import {  useNavigate } from 'react-router-dom'
import style from './Vip.module.css';
import { useFormik } from 'formik';


export default function AddEnableFeature() {



  let navigate = useNavigate();



  function enableFeatureSubmit(values) {
    console.log(values);
    navigate('/gift/vip/enablefeature');
  }



  let formik = useFormik({
    initialValues: {
      vipName: "",
      privilegesID: ""
    },

    onSubmit: enableFeatureSubmit
  });







  return (
    <>
      <div className='w-75 d-flex justify-content-center py-5 mt-2'>
        <h2 className='fs-4 fw-bold'>إضافة تمكين خاصية</h2>
      </div>

      <form onSubmit={formik.handleSubmit} className={`${style.heightFormEnable} w-75 ms-4 px-5 d-flex flex-column justify-content-between`}>
        <div className="row px-5">

          <div className="col-6">
            <label className='fs15 pb-1' htmlFor="vipName">إسم الــ VIP</label>
            <input className={`${style.holder} py-3 form-control`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vipName}
              name='vipName'
              type="text"
              id='vipName'
              placeholder='الرجاء إدخال إسم الــ VIP' />
          </div>
          <div className="col-6">
            <label className='fs15 pb-1' htmlFor="privilegesID">ID الـ Privileges</label>
            <input className={`${style.holder} py-3 form-control`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.privilegesID}
              name='privilegesID'
              type="text"
              id='privilegesID'
              placeholder='الرجاء إدخال ID الـ privileges' />
          </div>

        </div>

        <div dir='ltr' className="col-12 py-1 ms-5">
          <button className={`${style.addBtnWidth} btn text-white px-4 py- fs15 fw-bold`} type="submit">إضافة</button>
          <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
        </div>
      </form>


    </>
  )
}
