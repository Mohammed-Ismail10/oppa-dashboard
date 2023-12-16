import { useFormik } from 'formik';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../Assets/Images/Ellipse 2.png';
import { handleCloseChangeId, handleCloseEditRow } from '../Redux/ModalsSlice.js';
import style from './ModelChange.module.css';
import * as Yup from 'yup';
import axios from 'axios';


export default function ModalChange() {

  let { showChangeId, showEditRow, rowId } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  function handleCloseChangeIdBig() {
    dispatch(handleCloseChangeId());
  }

  function handleCloseEditRowBig() {
    dispatch(handleCloseEditRow());
  }



  const validationSchema = Yup.object({

  });
  async function submit(values) {
    let { data } = await axios.post();
  }
  let formik = useFormik({
    initialValues: {

    },
    validationSchema,
    onSubmit: submit
  });







  return (
    <>
      <Modal centered animation={false} show={showChangeId} onHide={handleCloseChangeIdBig}>
        <Modal.Body>
          <div className='text-center mx-auto ratio ratio-1x1 rounded-circle overflow-hidden h-25 w-25 mb-3'>
            <img src={image} alt="personal img" loading='lazy' width={100} />
          </div>
          <div>
            <form>
              <div className="row">
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="normalId">ال(ID) العادي</label>
                  <input className="form-control py-1" type="number" id='normalId' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="supId">ال(ID) الداعم</label>
                  <input className="form-control py-1" type="number" id='supId' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="phone">رقم الهاتف</label>
                  <input className="form-control py-1" type="tel" id='phone' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="country">الدولة</label>
                  <input className="form-control py-1" type="text" id='country' />
                </div>
                <div className="col-6 py-1 fs15">
                  <label className='pb-2' htmlFor="gender">الجنس</label>
                  <br />
                  <label className="curser-pointer me-2" htmlFor="male">
                    <input className={`${style.radio} d-none`} type="radio" name="gender" value={'ذكر'} id='male' />
                    <i className={`${style.iconGender} fa-solid fa-mars p-2 rounded-circle bg-secondary-subtle`}></i>
                  </label>
                  <span>ذكر</span>
                  <label className="curser-pointer me-2 ms-3" htmlFor="female">
                    <input className={`${style.radio} d-none`} type="radio" name="gender" value={'أنثى'} id='female' />
                    <i className={`${style.iconGender} fa-solid fa-venus p-2 rounded-circle bg-secondary-subtle`}></i>
                  </label>
                  <span>أنثى</span>
                </div>

                <div className="col-12 py-1 mt-5">
                  <button type='submit' className='btn bg-blue text-white w-100 fs-5 fw-bold py-1'>
                    <i className="bi bi-check2-circle me-2"></i>
                    حفظ التغييرات
                  </button>
                </div>

              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>



      {/* Modal for edit one row in users and otp */}
      <Modal centered animation={false} show={showEditRow} onHide={handleCloseEditRowBig}>
        <Modal.Body>
          <div className='text-center mx-auto ratio ratio-1x1 rounded-circle overflow-hidden h-25 w-25 mb-3'>
            <img src={image} alt="personal img" loading='lazy' width={100} />
          </div>
          <div>

            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="normalId">الإسم الأول</label>
                  <input className="form-control py-1" type="text" id='firstName' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="supId">الإسم الثاني</label>
                  <input className="form-control py-1" type="text" id='secondName' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="phone">رقم الهاتف</label>
                  <input className="form-control py-1" type="tel" id='phone' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="country">الدولة</label>
                  <input className="form-control py-1" type="text" id='country' />
                </div>
                <div className="col-6 py-1 fs15">
                  <label className='pb-2' htmlFor="gender">الجنس</label>
                  <br />
                  <label className="curser-pointer me-2" htmlFor="male">
                    <input className={`${style.radio} d-none`} type="radio" name="gender" value={'ذكر'} id='male' />
                    <i className={`${style.iconGender} fa-solid fa-mars p-2 rounded-circle bg-secondary-subtle`}></i>
                  </label>
                  <span>ذكر</span>
                  <label className="curser-pointer me-2 ms-3" htmlFor="female">
                    <input className={`${style.radio} d-none`} type="radio" name="gender" value={'أنثى'} id='female' />
                    <i className={`${style.iconGender} fa-solid fa-venus p-2 rounded-circle bg-secondary-subtle`}></i>
                  </label>
                  <span>أنثى</span>
                </div>

                <div className="col-12 py-1 mt-5">
                  <button type='submit' className='btn bg-blue text-white w-100 fs-5 fw-bold py-1'>
                    <i className="bi bi-check2-circle me-2"></i>
                    حفظ التغييرات
                  </button>
                </div>

              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
