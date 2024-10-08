import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import style from './Gifts.module.css';
import { Nav, Navbar } from 'react-bootstrap';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';

export default function Gifts() {



  const { showDelete, showUserQuery } = useSelector(({ modals }) => modals)
  const dispatch = useDispatch();
  let { pathname } = useLocation();







  return (
    <>
      <div className={`${style.heightItems} `}>

        {/* nav */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className={`justify-content-between align-items-start`}>
            <Nav className="flex-wrap">
              {pathname === '/app/rooms/gifts/add' ? null : <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>}
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 mx-2 border-0 btn fs15 text-main fw-bold nav-link bg-white addActive`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة
              </NavLink>
              {pathname === '/app/rooms/gifts/add' ? null : <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>}
            </Nav>

            {pathname === '/app/rooms/gifts/add' ? null : <Nav className={`${style.widthNavDelete} justify-content-end pe-5 mt-3 mt-xxl-0`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} ${style.flexNone} ms-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>}
          </Navbar>
        </div>


        <div className="h-100">
          <Outlet />
        </div>


        {/* modals */}
        <ModalDelete />
        <ModalUserQuery />

      </div>
    </>
  );
}
