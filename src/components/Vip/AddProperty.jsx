import React, { useRef, useState } from 'react'
import style from './AddProperty.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';


export default function AddProperty() {

  function uploadItemsSubmit(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      image: null,
    },
    onSubmit: uploadItemsSubmit
  });



  const [uploadImage, setUploadImage] = useState(false);
  const [uploadImageDone, setUploadImageDone] = useState('');



  const imageInputRef = useRef(null);
  const svgaInputRef = useRef(null);

  function reset() {
    setUploadImage(false);
    setUploadImageDone('');
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
      <div className={`container-fluid ${style.heightAddPro}`}>

        <div className='pt-5 mt-3'>
          <Navbar>
            <Nav className="w-100 px-2">
              <NavLink to={''} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة خاصية
              </NavLink>
            </Nav>
          </Navbar>

        </div>

        <div className='pt-5 h-100'>

          <form onSubmit={formik.handleSubmit} className='w-75 mx-auto d-flex flex-column justify-content-between h-100'>
            <div>
              {/* upload image */}
              <div className='d-flex justify-content-start'>
                <div className='text-center d-flex flex-column align-items-center mx-4'>
                  <span className='fs15 pb-2'>إضافة صورة Privileges</span>
                  <label className={`${style.imgPick} pt-4 curser-pointer d-inline`} htmlFor="addImage">
                    <img className={`${uploadImage ? `${style.uploadImgDone}` : `${style.uploadImg}`}`} src={``} alt="" />
                    {/* <i className="fa-regular fa-image fs-3 pt-1"></i> */}
                    <span className={`${uploadImage ? `${style.textGreen}` : 'text-gray'} fs15 pt-3 d-block`}>رفع الصورة</span>
                    <input className="d-none"
                      ref={imageInputRef}
                      onChange={(event) => {
                        formik.setFieldValue('image', event.currentTarget.files[0]);
                        setUploadImage(true);
                        setUploadImageDone(event.currentTarget.files[0].name);
                        console.log(event.currentTarget.files[0])
                      }}
                      name='image' type="file" accept='image/*' id="addImage" />
                  </label>
                  {/* {uploadImageDone ? <span dir='ltr'>{uploadImageDone} تم رفع</span> : null} */}
                </div>
              </div>

              <hr className='w-100 my-5' />

              {/* the rest of form */}
              <div className="row">
                <div className="col-6">
                  <label className='fs15 pb-1' htmlFor="fullName">إسم الPrivileges بالعربي</label>
                  <input className={`${style.holder} py-3 form-control`} name='fullName' type="text" id='fullName' placeholder='الرجاء إدخال إسم الPrivileges بالعربي' />
                </div>
                <div className="col-6">
                  <label className='fs15 pb-1' htmlFor="userName">إسم الPrivileges بالEN</label>
                  <input className={`${style.holder} py-3 form-control`} name='userName' type="text" id='userName' placeholder='الرجاء إدخال إسم الPrivileges بالEN' />
                </div>
              </div>
            </div>


            <div dir='ltr' className="col-12 py-1">
              <button className={`${style.addBtnWidth} btn text-white px-4 fs15 fw-bold`} type="submit">إضافة</button>
              <button onClick={() => reset()} className='btn bg-white text-red me-4 fs15 fw-bold' type="button">إعادة ضبط</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
