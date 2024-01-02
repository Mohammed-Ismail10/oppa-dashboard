import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { handleShowChangeId, handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import style from './Vip.module.css';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';


export default function Vip() {

  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();
  let { pathname } = useLocation();


  return (
    <>
      <section className={`${style.heightItems}`}>
        {/* Nav links for Vip */}
        <div className='pt-5 mt-3 ms-3 ms-xxl-4'>
          <Navbar className={`justify-content-between align-items-start ${style.navWidth}`}>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-0 me-xxl-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة VIP
              </NavLink>
              {pathname == '/gift/vip/add' ? null : <>
                <NavLink to={'/gift/vip/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  عرض الخصائص
                </NavLink>
                <NavLink to={'/gift/vip/enablefeature'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  تمكين خاصية
                </NavLink>
              </>}

            </Nav>
            {pathname == '/gift/vip/add' ? null : <Nav className={`${style.flexNone} mt-3 mt-xxl-0`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>}

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













