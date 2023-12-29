import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { handleShowChangeId, handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import style from './Vip.module.css';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';


export default function Vip() {

  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  return (
    <>
      <section className={`${style.heightItems}`}>
        {/* Nav links for Vip */}
        <div className='pt-5 mt-3 ps-3'>
          <Navbar >
            <Nav className="w-100 pe-2 flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-0 me-xxl-3 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة VIP
              </NavLink>
              <NavLink to={'/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                عرض الخصائص
              </NavLink>
              <NavLink to={'/enablefeature'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تمكين خاصية
              </NavLink>

            </Nav>
            <Nav className={`${style.flexNone} align-items-start mb-4 mb-xxl-1 pb-2 pb-xxl-0 ms-xxl-auto`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-1 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>
          </Navbar>

        </div>


        {/* content VIP */}
        <div className='h-100'>
          <Outlet />
        </div>


        {/* modals: first => (تغير المعرف). second => (مسح الكل). */}
        <ModalChange />
        <ModalDelete />
        <ModalUserQuery />
      </section>

    </>
  )
}













