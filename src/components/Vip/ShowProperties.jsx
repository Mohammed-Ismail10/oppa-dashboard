import React from 'react'
import style from './Vip.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete } from '../Redux/ModalsSlice.js';
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
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mt-3 mt-xxl-0 me-2 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة خاصية
              </NavLink>
              {pathname === '/gift/vip/showproperties/add' ? null : <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xxl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>}
            </Nav>
            {pathname === '/gift/vip/showproperties/add' ? null : <Nav className={`${style.widthNavDelete} justify-content-center pe-5 mt-3 mt-xxl-0`}>
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

        <div className="h-100">
          <Outlet />
        </div>

        <ModalDelete />
      </div>
    </>
  )
}
