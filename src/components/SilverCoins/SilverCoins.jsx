import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import style from './SilverCoins.module.css';
import { handleShowDelete } from '../Redux/ModalsSlice.js';
import { Nav, Navbar } from 'react-bootstrap';



export default function SilverCoins() {

  let { showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  return (
    <>
      <div className={`${style.heightItems}`}>

        {/* items nav links */}
        <div className='pt-5 mt-3 ms-3'>
          <Navbar>
            <Nav className="w-100 pe-2">
              <NavLink to={'/silvercoins'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover}  mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                مسح الكل
              </NavLink>
            </Nav>
          </Navbar>
        </div>

        {/* content items */}
        <div className='h-100'>
          <Outlet />
        </div>

        {/* modals: first => (تغير المعرف). second => (مسح الكل). */}
        <ModalDelete />
      </div>
    </>
  )
}
