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
      {/* nav links of show property */}
      <div className='pt-5 mt-3'>
        <Navbar>
          <Nav className="w-100 pe-2">
            <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة خاصية
            </NavLink>
            {pathname == '/gift/vip/showproperties/add' ? null : <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
              مسح الكل
            </NavLink>}

          </Nav>
        </Navbar>

      </div>

      <div className="h-100">
        <Outlet />
      </div>

      <ModalDelete />
    </>
  )
}
