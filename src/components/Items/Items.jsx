import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { handleShowChangeId, handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import { search } from '../Redux/UserQuerySlice.js';
import style from './Items.module.css';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';

export default function Items() {
  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();
  let { pathname } = useLocation();




  return (
    <>
      <div className={`${style.heightItems}`}>

        {/* items nav links */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className={`justify-content-between align-items-start`}>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-0 me-xl-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0  mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة
              </NavLink>
              {pathname === '/gift/items/add' ? null : <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>}
            </Nav>

            {pathname === '/gift/items/add' ? null : <Nav className={`${style.widthNavDelete} justify-content-center pe-5 mt-3 mt-xxl-0`}>
              <div className={`position-relative rounded-2 w-100`}>
                <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
                <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-1 bg-search border-0 ps-5 h-100`} type="search" name="" id="" placeholder='يمكنك البحث هنا' onChange={({target})=>dispatch(search(target.value))}/>
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

        {/* modals: first => (تغير المعرف). second => (مسح الكل). 3 => استعلام المستخدم*/}
        <ModalChange />
        <ModalDelete />
        <ModalUserQuery />

      </div>
    </>
  )
}
