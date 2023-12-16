import React, { useState } from 'react'
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




  return (
    <>
      <section className='py-4'>

        <div className='pb-4'>
          <Navbar>
            <Container>
              <Nav className="w-100">
                <NavLink to={''} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إضافة خاصية
                </NavLink>
              </Nav>
            </Container>
          </Navbar>

        </div>




        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto'>
          {/* upload image */}
          <div className='d-flex justify-content-start'>
            <div className='text-center d-flex flex-column align-items-center'>
              <span className='fs15 pb-2'>إضافة صورة Privileges</span>
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
          </div>

          <hr className='w-100 mx-auto mt-4' />

          {/* the rest of form */}
          <div className="row">
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="fullName">إسم الPrivileges بالعربي</label>
              <input className={`${style.holder} form-control`} name='fullName' type="text" id='fullName' placeholder='الرجاء إدخال إسم الPrivileges fhguvfd' />
            </div>
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="userName">إسم الPrivileges بالEN</label>
              <input className={`${style.holder} form-control`} name='userName' type="text" id='userName' placeholder='الرجاء إدخال إسم الPrivileges بالEN' />
            </div>

            <div dir='ltr' className="col-12 py-4">
            <button className='btn bg-success text-white px-5 fs15 fw-bold' type="submit">إضافة</button>
              <button onClick={() => {
                setUploadImage(false);
                setUploadImageDone('');
                formik.resetForm();
              }} className='btn bg-white text-red me-2 fs15 fw-bold' type="button">إعادة ضبط</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
