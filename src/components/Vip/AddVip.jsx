import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import style from './AddVip.module.css';
import { useNavigate } from 'react-router-dom';

export default function AddVip() {


let navigate = useNavigate();

  function uploadItemsSubmit(values) {
    console.log(values);
    navigate('/vip');
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
                  {/* <i className="fa-regular fa-image fs-3 pt-1"></i> */}
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
                  <img className={`${uploadSvga ? `${style.uploadSvgaDone}` : uploadSvgaError ? `${style.uploadSvgaError}` : `${style.uploadSvga}`}`} src={``} alt="" />
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
                {/* {uploadSvgaDone ? <span dir='ltr'>{uploadSvgaDone} تم رفع</span> : uploadSvgaError ? <span>يجب أن يكون امتداد الملف svga</span> : null} */}
              </div>
            </div>

            <hr className='w-100 my-5' />

            {/* the rest of form */}
            <div className="row">
              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="nameGift">إسم الــ VIP</label>
                <input className={`${style.holder} py-3 form-control`} type="text" placeholder='الرجاء إدخال إسم الــ VIP' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="nameGift">مدة الإنتهاء</label>
                <input className={`${style.holder} py-3 form-control`} type="text" placeholder='0' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="nameGift">سعر الــ VIP</label>
                <input className={`${style.holder} py-3 form-control`} type="number" placeholder='0.00' />
              </div>
              <div className="col-6 pb-4">
                <label className='fs15 pb-1' htmlFor="nameGift">مستوى الــ VIP</label>
                <input className={`${style.holder} py-3 form-control`} type="text" placeholder='Hot' />
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
