import React from 'react'
import { handleShowChangeId, handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import style from './Vip.module.css';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';






export default function EnableFeature() {



  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();


  let { pathname } = useLocation();









  return (
    <>
      <div className={`${style.heightItems}`}>

        {/* Nav links for Vip enable feature */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className='justify-content-between align-items-start'>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-0 me-xl-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
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
              <NavLink to={'/gift/vip/add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة VIP
              </NavLink>
              <NavLink to={'/gift/vip/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                عرض الخصائص
              </NavLink>
              <NavLink to={''} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link ${pathname === '/gift/vip/enablefeature/add' ? '' : 'addActive'}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تمكين خاصية
              </NavLink>
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة تمكين خاصية
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
            </Nav>
            {pathname === '/gift/vip/enablefeature/add' ? null : <Nav className={`justify-content-end pe-5 mt-3 mt-xxl-0`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} ${style.flexNone} ms-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>}

          </Navbar>

        </div>

        <div className='h-100'>
          <Outlet />
        </div>

        <ModalDelete />
        <ModalUserQuery />
      </div>
    </>
  )
}
