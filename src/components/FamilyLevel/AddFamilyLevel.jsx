import React, { useRef } from 'react'
import style from './AddFamilyLevel.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import img from '../../Assets/Images/uploadImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImageFalse, uploadImageTrue } from '../Redux/ResetSlice.js';




export default function AddFamilyLevel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uploadImage } = useSelector(({ reset }) => reset);

  function uploadItemsSubmit(values) {
    console.log(values);
    navigate('/app/familylevel');
  }

  let formik = useFormik({
    initialValues: {
      image: null,
    },
    onSubmit: uploadItemsSubmit
  });




  const imageInputRef = useRef(null);

  function reset() {
    dispatch(uploadImageFalse());
    formik.resetForm();
    // Reset file inputs
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  }



  return (
    <>
      <div className="container-fluid h-100 pt-5">

        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100'>
          <div>
            {/* upload image */}
            <div className='d-flex justify-content-start'>
              <div className='text-center d-flex flex-column align-items-center mx-4'>
                <span className='fs15 pb-2'>إضافة الصورة</span>
                <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addImage">
                  <img className={`${uploadImage ? `${style.uploadImgDone}` : ``}`} src={img} alt="" />
                  <span className={`${uploadImage ? `${style.textGreen}` : 'text-gray'} fs15 pt-3 d-block`}>رفع الصورة</span>
                  <input className="d-none"
                    ref={imageInputRef}
                    onChange={(event) => {
                      formik.setFieldValue('image', event.currentTarget.files[0]);
                      dispatch(uploadImageTrue());
                      console.log(event.currentTarget.files[0])
                    }}
                    name='image' type="file" accept='image/*' id="addImage" />
                </label>
              </div>
            </div>

            <hr className='w-100 my-5' />

            {/* the rest of form */}
            <div className="row">
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="fullName">معرف الــ (ID)</label>
                <input className={`${style.holder} py-3 form-control`} name='fullName' type="number" id='fullName' placeholder='(ID) الرجاء إدخال معرف الــ' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">إسم العائلة</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='ماكسيم' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">الخبرة</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="number" id='userName' placeholder='1000000.00' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">مستوى العائلة</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="number" id='userName' placeholder='1000000.00' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">المسؤولين</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="number" id='userName' placeholder='4' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">الأعضاء</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="number" id='userName' placeholder='5' />
              </div>
            </div>
          </div>


          <div dir='ltr' className="col-12 py-1">
            <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">إضافة</button>
            <button onClick={() => reset()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
          </div>

        </form>

      </div>

    </>
  )
}
