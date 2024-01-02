import React, { useRef, useState } from 'react'
import style from './UserSetting.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function UserSetting() {

  let navigate = useNavigate();

  function uploadItemsSubmit(values) {
    // let data = new FormData();
    // data.append('image', values.image);
    console.log(values);
    navigate('/');
  }

  let formik = useFormik({
    initialValues: {
      image: null,
    },
    onSubmit: uploadItemsSubmit
  });



  const [uploadImage, setUploadImage] = useState(false);



  const imageInputRef = useRef(null);

  function reset() {
    setUploadImage(false);
    formik.resetForm();
    // Reset file inputs
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
  }










  return (
    <>
      <div className={`container-fluid ${style.heightAddPro} pt-5 h-100`}>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100 pt-5'>
          <div>
            {/* upload image */}
            <div className='d-flex justify-content-start'>
              <div className='text-center d-flex flex-column align-items-center mx-4'>
                <span className='fs15 pb-2'>صورة ملفك الشخصي</span>
                <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addImage">
                  <img className={`${uploadImage ? `${style.uploadImgDone}` : `${style.uploadImg}`}`} src={``} alt="" />
                  <span className={`${uploadImage ? `${style.textGreen}` : 'text-gray'} fs15 pt-3 d-block`}>رفع الصورة</span>
                  <input className="d-none"
                    ref={imageInputRef}
                    onChange={(event) => {
                      formik.setFieldValue('image', event.currentTarget.files[0]);
                      setUploadImage(true);
                      // console.log(event.currentTarget.files[0])
                    }}
                    name='image' type="file" accept='image/*' id="addImage" />
                </label>
              </div>
            </div>

            <hr className='w-100 mt-5 mb-4' />

            {/* the rest of form */}
            <div className="row">
              <div className="col-6 mb-3">
                <label className='fs15 pb-2' htmlFor="fullName">الإسم كامل</label>
                <input className={`${style.holder} py-3 form-control`} name='fullName' type="text" id='fullName' placeholder='من فضلك أدخل اسمك الكامل' />
              </div>
              <div className="col-6 mb-3">
                <label className='fs15 pb-2' htmlFor="userName">إسم المستخدم</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='الرجاء إدخال إسم المستخدم' />
              </div>
              <div className="col-6 mb-3">
                <label className='fs15 pb-2' htmlFor="userName">الرقم السري</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="password" id='userName' placeholder='********************' />
              </div>
              <div className="col-6 mb-3">
                <label className='fs15 pb-2' htmlFor="userName">تأكيد الرقم السري</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="password" id='userName' placeholder='********************' />
              </div>
              <div className="col-6 mb-3">
                <label className='fs15 pb-2' htmlFor="userName">رقم الهاتف</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="tel" id='userName' placeholder='يرجى إدخال رقم الهاتف الخاص بك' />
              </div>
            </div>
          </div>


          <div dir='ltr' className="col-12 py-5">
            <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">تحديث الملف</button>
            <button onClick={() => reset()} className='btn bg-white text- me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
          </div>

        </form>
      </div>
    </>
  )
}
