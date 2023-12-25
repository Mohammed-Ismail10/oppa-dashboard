import React, { useEffect, useRef, useState } from 'react';
import style from './AddItems.module.css';
import { useFormik } from 'formik';
import img from '../../Assets/Images/uploadImage.png'
import svga from '../../Assets/Images/uploadSvga.png'



export default function AddItems() {
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
      <div className="container-fluid pt-5 h-100">
        <form className='w-75 mx-auto d-flex flex-column justify-content-between h-100' onSubmit={formik.handleSubmit}>
          <div>
            {/* upload images */}
            <div className='d-flex justify-content-center me-5'>

              <div className='text-center d-flex flex-column align-items-center mx-4'>
                <span className='fs15 pb-2'>إضافة صورة</span>
                <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addImage">
                  <img className={`${uploadImage ? `${style.uploadImgDone}` : `${style.uploadImg}`}`} src={``} alt="" />
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
                <label className='fs15 pb-1' htmlFor="nameGift">إسم الهدية</label>
                <input className={`${style.holder} form-control py-3`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.giftName}
                  name='giftName'
                  type="text"
                  id='nameGift'
                  placeholder='الرجاء إدخال إسم الهدية' />
              </div>

              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="expired">مدة الإنتهاء</label>
                <input className={`${style.holder} py-3 form-control`} name='time' type="text" id='expired' placeholder='5 أيام' />
              </div>

              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="price">السعر</label>
                <input className={`${style.holder} py-3 form-control`} name='price' type="number" id='price' placeholder='0.00' />
              </div>

              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="getGift">الحصول على الهدايا</label>
                <input className={`${style.holder} py-3 form-control`} name='getgift' type="text" id='getGift' placeholder='شراء' />
              </div>

              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="typeGift">نوع الهدايا</label>
                {/* <input className={`${style.holder} py-3 form-control`} name='type' type="text" id='typeGift' placeholder='Hot' /> */}
                <select className={`text-gray fs15 fw-medium form-select py-3`} id="inputGroupSelect01">
                  <option selected>Hot</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
  );
}
























{/* <div className="col-12 py-1">
              {activeState ? <input onClick={() => setActiveState(!activeState)} className='btn bg-green px-4 text-white rounded-4 fs15 fw-bold' name='act' type="button" value="نشيط" /> :
                <input onClick={() => setActiveState(!activeState)} className='btn bg-red text-white rounded-4 fs15 fw-bold' name='act' type="button" value="غير نشيط" />}
            </div> */}