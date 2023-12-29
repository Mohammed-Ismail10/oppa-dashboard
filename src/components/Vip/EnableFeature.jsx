import React, { useEffect, useState } from 'react'
import { handleShowChangeId, handleShowDelete, handleShowDeleteRow, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './Vip.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { baseUrl } from '../../helpers/constant.js';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';






export default function EnableFeature() {



  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();


  let { pathname } = useLocation();









  return (
    <>

      {/* Nav links for Vip enable feature */}
      <div className='pt-5 mt-3 ps-3'>
        <Navbar>
          <Nav className="w-100 pe-2 flex-wrap">
            <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-0 me-xl-3 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إستعلام المستخدم
            </NavLink>
            <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              سجل الهدايا
            </NavLink>
            <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              تغير المعرف (ID)
            </NavLink>
            <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
              <i className="bi bi-funnel me-2"></i>
              فلتر
            </NavLink>
            <NavLink to={'/gift/vip/add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة VIP
            </NavLink>
            <NavLink to={'/gift/vip/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              عرض الخصائص
            </NavLink>
            <NavLink to={''} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              تمكين خاصية
            </NavLink>
            <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة تمكين خاصية
            </NavLink>
          </Nav>
          {pathname == '/gift/vip/enablefeature/add' ? null : <Nav className={`${style.flexNone} align-items-start mb-4 mb-xxl-1 pb-2 pb-xxl-0 ms-xxl-auto`}>
            <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-1 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
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
    </>
  )
}
