import React, { useEffect, useState } from 'react'
import style from './Vip.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';








export default function ShowProperties() {



  let { showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  let { pathname } = useLocation();












  return (
    <>
    <div className={`${style.heightItems}`}>

      {/* nav links of show property */}
      <div className='pt-5 mt-3 ms-4'>
        <Navbar className='justify-content-between align-items-start'>
          <Nav className="flex-wrap">
            <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة خاصية
            </NavLink>
          </Nav>
            {pathname == '/gift/vip/showproperties/add' ? null : <Nav className={`${style.flexNone} mt-3 mt-xxl-0`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>}
        </Navbar>

      </div>

      <div className="h-100">
        <Outlet />
      </div>

      <ModalDelete />
    </div>
    </>
  )
}
