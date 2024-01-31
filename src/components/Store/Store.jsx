import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import style from './Store.module.css';
import { handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import { Nav, Navbar } from 'react-bootstrap';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';

export default function Store() {


  let { showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();
  let { pathname } = useLocation();


  return (
    <>
      <div className={`${style.heightItems}`}>

        {/* items nav links */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className={`justify-content-between align-items-start`}>
            <Nav className="flex-wrap">
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-2 border-0 btn fs15 text-main fw-bold nav-link bg-white addActive`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة
              </NavLink>
              {pathname === '/app/store/add' ? null : <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>}
            </Nav>

            {pathname === '/app/store/add' ? null : <Nav className={`${style.widthNavDelete} justify-content-center pe-5 mt-3 mt-xxl-0`}>
              <div className={`position-relative rounded-2 w-100`}>
                <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
                <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-1 bg-search border-0 ps-5 h-100`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
              </div>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} ${style.flexNone} ms-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>}
          </Navbar>
        </div>

        {/* content items */}
        <div className='h-100'>
          <Outlet />
        </div>

        {/* modals: first => (تغير المعرف). second => (مسح الكل). */}
        <ModalDelete />
        <ModalUserQuery />
      </div>
    </>
  );
}
