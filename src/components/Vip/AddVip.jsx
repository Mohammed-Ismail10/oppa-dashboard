import { useFormik } from 'formik';
import React, { useState } from 'react';
import style from './AddVip.module.css';

export default function AddVip() {




  function uploadItemsSubmit(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      giftName: "",
      image: null,
      svga: null
    },
    onSubmit: uploadItemsSubmit
  });



  const [uploadImage, setUploadImage] = useState(false);
  const [uploadImageDone, setUploadImageDone] = useState('');
  const [uploadSvga, setUploadSvga] = useState(false);
  const [uploadSvgaDone, setUploadSvgaDone] = useState('');
  const [uploadSvgaError, setUploadSvgaError] = useState(false);



  function reset() {
    setUploadImage(false);
    setUploadImageDone('');
    setUploadSvga(false);
    setUploadSvgaDone('');
    setUploadSvgaError(false);
    formik.resetForm();
  }











  return (
    <>
      <div className="container py-4">
        <form onSubmit={formik.handleSubmit}>
          {/* upload images */}
          <div className='d-flex justify-content-center'>

            <div className='text-center d-flex flex-column align-items-center mx-4'>
              <span className='fs15 pb-2'>إضافة صورة</span>
              <label className={`${style.imgPick} p-2 curser-pointer d-inline ${uploadImage ? 'bg-green' : ''}`} htmlFor="addImage">
                <i className="fa-regular fa-image fs-3 pt-1"></i>
                <span className='text-main fs15 pt-1 d-block'>رفع الصورة</span>
                <input className="d-none"
                  onChange={(event) => {
                    formik.setFieldValue('image', event.currentTarget.files[0]);
                    setUploadImage(true);
                    setUploadImageDone(event.currentTarget.files[0].name);
                  }}
                  name='image' type="file" accept='image/*' id="addImage" />
              </label>
              {uploadImageDone ? <span dir='ltr'>{uploadImageDone} تم رفع</span> : null}
            </div>

            <div className='text-center d-flex flex-column align-items-center mx-4 '>
              <span className='fs15 pb-2'>إضافة ملف الSVGA</span>
              <label className={`${style.imgPick} p-2 curser-pointer d-inline ${uploadSvga ? 'bg-green' : uploadSvgaError ? 'bg-red' : ''}`} htmlFor="addSVGA">
                <i className="fa-regular fa-image fs-3 pt-1"></i>
                <span className='text-main fs15 pt-1 d-block'>رفع الSVGA</span>
                <input className="d-none"
                  onChange={(event) => {
                    if (event.currentTarget.files[0].name.endsWith('.svga')) {
                      formik.setFieldValue('svga', event.currentTarget.files[0]);
                      setUploadSvga(true);
                      setUploadSvgaDone(event.currentTarget.files[0].name);
                      setUploadSvgaError(false);
                    }
                    else {
                      setUploadSvgaError(true);
                    }
                  }}
                  name='svga' type="file" id="addSVGA" />
              </label>
              {uploadSvgaDone ? <span dir='ltr'>{uploadSvgaDone} تم رفع</span> : uploadSvgaError ? <span>يجب أن يكون امتداد الملف svga</span> : null}
            </div>
          </div>

          <hr className='w-75 mx-auto mt-4' />

          {/* the rest of form */}
          <div className="row w-75 mx-auto">
            <div className="col-6 py-1">
              <label className='fs15' htmlFor="nameGift">إسم الVIP</label>
              <input className={`${style.holder} form-control`} type="text" placeholder='الرجاء إدخال إسم الVIP' />
            </div>
            <div className="col-6 py-1">
              <label className='fs15' htmlFor="nameGift">مدة الإنتهاء</label>
              <input className={`${style.holder} form-control`} type="text" placeholder='5 أيام' />
            </div>
            <div className="col-6 py-1">
              <label className='fs15' htmlFor="nameGift">سعر الVIP</label>
              <input className={`${style.holder} form-control`} type="number" placeholder='0.00' />
            </div>
            <div dir='ltr' className="col-12 py-5">
              <button className='btn bg-success text-white px-5 fs15 fw-bold' type="submit">إضافة</button>
              <button
                onClick={() => reset()}
                className='btn bg-white text-red me-2 fs15 fw-bold' type="button">إعادة ضبط</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
