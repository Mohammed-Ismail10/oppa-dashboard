import { useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import style from './AddGifts.module.css';
import { useNavigate } from 'react-router-dom';
import svga from '../../Assets/Images/uploadSvga.png'
import img from '../../Assets/Images/uploadImage.png';

export default function AddGifts() {


  let navigate = useNavigate();

  function uploadItemsSubmit(values) {
    console.log(values);
    navigate('/app/rooms/gifts')
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
  const [uploadSvga, setUploadSvga] = useState(false);
  const [uploadSvgaError, setUploadSvgaError] = useState(false);


  const imageInputRef = useRef(null);
  const svgaInputRef = useRef(null);



  function reset() {
    setUploadImage(false);
    setUploadSvga(false);
    setUploadSvgaError(false);
    formik.resetForm();
    // Reset file inputs
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
    if (svgaInputRef.current) {
      svgaInputRef.current.value = '';
    }
  }









  return (
    <>
      <div className="container-fluid h-100 pt-5">

        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100'>
          <div>
            {/* upload image */}
            <div className='d-flex justify-content-center me-5'>

              <div className='text-center d-flex flex-column align-items-center mx-4'>
                <span className='fs15 pb-2'>إضافة الصورة</span>
                <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addImage">
                  <img className={`${uploadImage ? `${style.uploadImgDone}` : `${style.uploadImg}`}`} src={img} alt="" />
                  <span className={`${uploadImage ? `${style.textGreen}` : 'text-gray'} fs15 pt-3 d-block`}>رفع الصورة</span>
                  <input className="d-none"
                    ref={imageInputRef}
                    onChange={(event) => {
                      formik.setFieldValue('image', event.currentTarget.files[0]);
                      setUploadImage(true);
                      console.log(event.currentTarget.files[0])
                    }}
                    name='image' type="file" accept='image/*' id="addImage" />
                </label>
              </div>

              <div className='text-center d-flex flex-column align-items-center mx-4 '>
                <span className='fs15 pb-2'>إضافة ملف الSVGA</span>
                <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addSVGA">
                  <img className={`${uploadSvga ? `${style.uploadSvgaDone}` : uploadSvgaError ? `${style.uploadSvgaError}` : `${style.uploadSvga}`}`} src={svga} alt="" />
                  <span className={`${uploadSvga ? `${style.textGreen}` : uploadSvgaError ? `${style.textRed}` : `text-gray`} text-gray fs15 pt-3 d-block`}>رفع الSVGA</span>
                  <input className="d-none"
                    ref={svgaInputRef}
                    onChange={(event) => {
                      if (event.currentTarget.files[0].name.endsWith('.svga')) {
                        formik.setFieldValue('svga', event.currentTarget.files[0]);
                        setUploadSvga(true);
                        setUploadSvgaError(false);
                      }
                      else {
                        setUploadSvgaError(true);
                      }
                    }}
                    name='svga' type="file" id="addSVGA" />
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
                <label className='fs15 pb-2' htmlFor="userName">اسم الهدية</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="tel" id='userName' placeholder='سيارة' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">سعر الهدية</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='0.00' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-2' htmlFor="userName">نوع الهدية</label>
                <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='Hot' />
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
