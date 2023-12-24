import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseAddBalance } from '../Redux/ModalsSlice.js';
import closeBtn from '../../Assets/Images/closeBtn.png';
import { useFormik } from 'formik';
import style from './ModalAddBalance.module.css';

export default function ModalAddBalance() {
  let { showAddBalance } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  function handleCloseAddBalanceBig() {
    dispatch(handleCloseAddBalance());
  }


  function rechargeSubmit(values) {
    console.log(values)
  }




  let formik = useFormik({
    initialValues: {
      normalId: '',
      price: null,
      user: '',
      type: '',
      typeU: ''
    },
    onSubmit: rechargeSubmit
  });






  return (
    <>
      <Modal className='custom-modal-balance' centered animation={false} show={showAddBalance} onHide={handleCloseAddBalanceBig}>
        <Modal.Body>
          <div className='position-relative py-3 d-flex justify-content-center'>
            <h3 className='text-center h1 fw-bold'>شحن رصيد</h3>
            <img onClick={() => handleCloseAddBalanceBig()} className='position-absolute end-0 curser-pointer' width={50} src={closeBtn} alt="closeBtn" />
          </div>



          <div>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-between'>
              <div className="row py-5">

                <div className="col-6 py-2">
                  <label className='fs20 pb-2' htmlFor="normalId">معرف الID</label>
                  <input name='normalId' value={formik.values.normalId} onChange={formik.handleChange} className="form-control py-3 fw-medium" type="text" id='normalId' placeholder='الرجاء إدخال معرف الID' />
                </div>
                <div className="col-6 py-2">
                  <label className='fs20 pb-2' htmlFor="price">المبلغ</label>
                  <input name='price' value={formik.values.price} onChange={formik.handleChange} className="form-control py-3 fw-medium" type="number" id='price' placeholder='0.00' />
                </div>
                <div className="col-6 py-2">
                  <label className='fs20 pb-2' htmlFor="user">معرف المستخدم</label>
                  <input name='user' value={formik.values.user} onChange={formik.handleChange} className="form-control py-3 fw-medium" type="text" id='user' placeholder='الرجاء إدخال معرف المستخدم' />
                </div>


                <div className="col-6 py-2">
                  <label className='fs20 pb-2' htmlFor="type">نوع المعرف</label>
                  <select name='type' value={formik.values.type} onChange={formik.handleChange} className={`${formik.values.type ? 'text-main' : 'text-input'}  selCustom fs15 form-select py-3 curser-pointer fw-medium`} id="type">
                    <option hidden selected >الرجاء إدخال نوع المعرف</option>
                    <option className={`text-main`} value="normal">عادي</option>
                    <option className={`text-main `} value="star">مميز</option>
                  </select>
                </div>

                <div className="col-6 py-2">
                  <label className='fs20 pb-2' htmlFor="typeU">نوع المستخدم</label>
                  <select name='typeU' value={formik.values.typeU} onChange={formik.handleChange} className={`${formik.values.typeU ? 'text-main' : 'text-input'} fs15 form-select py-3 curser-pointer fw-medium`} id="typeU">
                    <option hidden selected >الرجاء إدخال نوع المستخدم</option>
                    <option className={`text-main`} value="normal">مستخدم عادي</option>
                    <option className={`text-main`} value="agency">وكالات</option>
                  </select>
                </div>


              </div>

              <div className="col-12 py-4 mt-5 pe-5">
                <div dir='ltr' className="py- me-5">
                  <button className={`${style.addBtnWidth} btn text-white px-4 fs20 fw-bold`} type="submit">إرسال</button>
                  <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-4 fs20 fw-bold' type="button">إعادة ضبط</button>
                </div>
              </div>

            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
