import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { handleShowChangeId, handleShowDelete } from '../Redux/ModalsSlice.js';
import style from './Items.module.css';

export default function Items() {
  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();




  return (
    <>
      <section className={`${style.heightItems}`}>

        {/* items nav links */}
        <div className='pt-5 mt-3'>
          <Navbar>
              <Nav className="w-100 px-2">
                <NavLink to={'/items'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إستعلام المستخدم
                </NavLink>
                <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  سجل الهدايا
                </NavLink>
                <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  تغير المعرف (ID)
                </NavLink>
                <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-funnel me-2"></i>
                  فلتر
                </NavLink>
                <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover}  mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إضافة
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
        <ModalChange />
        <ModalDelete />
      </section>
    </>
  )
}
