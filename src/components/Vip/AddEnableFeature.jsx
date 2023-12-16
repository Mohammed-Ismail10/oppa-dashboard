import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { handleShowChangeId } from '../Redux/ModalsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import style from './Vip.module.css';
import { useFormik } from 'formik';


export default function AddEnableFeature() {
  let { showChangeId } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();






  function enableFeatureSubmit(values) {
    console.log(values);
  }



  let formik = useFormik({
    initialValues: {
      vipName: "",
      privilegesID: ""
    },

    onSubmit: enableFeatureSubmit
  });







  return (
    <>

      {/* Nav links for Vip */}
      <div className='pt-4'>
        <Navbar>
          <Container>
            <Nav className="w-100">
              <NavLink to={'/vip'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <NavLink to={'/vip/add'} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة VIP
              </NavLink>
              <NavLink to={'/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                عرض الخصائص
              </NavLink>
              <NavLink to={'/enablefeature'} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تمكين خاصية
              </NavLink>
              <NavLink to={'/addenablefeature'} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة تمكين خاصية
              </NavLink>
            </Nav>
          </Container>
        </Navbar>

      </div>

      <div className='text-center py-4'>
        <h2 className='fs-4 fw-bold'>إضافة تمكين خاصية</h2>
      </div>

      <form onSubmit={formik.handleSubmit} className='w-75 mx-auto'>
        <div className="row">
          <div className="col-6 py-2">
            <label className='fs15 mb-2' htmlFor="vipName">إسم الVIP</label>
            <input className={`${style.holder} form-control`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vipName}
              name='vipName'
              type="text"
              id='vipName'
              placeholder='الرجاء إدخال لإسم الVIP' />
          </div>
          <div className="col-6 py-2">
            <label className='fs15 mb-2' htmlFor="privilegesID">ID الPrivileges</label>
            <input className={`${style.holder} form-control`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.privilegesID}
              name='privilegesID'
              type="text"
              id='privilegesID'
              placeholder='الرجاء إدخال ID الPrivileges' />
          </div>

          <div dir='ltr' className="col-12 py-4">
            <button className='btn bg-success text-white px-5 fs15 fw-bold' type="submit">إضافة</button>
            <button onClick={() => formik.resetForm()} className='btn bg-white text-red me-2 fs15 fw-bold' type="button">إعادة ضبط</button>
          </div>
        </div>
      </form>


    </>
  )
}
