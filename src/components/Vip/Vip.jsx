import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { handleShowChangeId, handleShowDelete } from '../Redux/ModalsSlice.js';
import style from './Vip.module.css';


export default function Vip() {

  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  // let testVip = [
  //   { id: 1, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 2, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 3, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 4, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 5, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 6, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  //   { id: 7, name: 'محمد', level: 'شراء', price: 10000, image: 'صورة', time: '7 أيام' },
  // ];



  return (
    <>
      {/* Nav links for Vip */}
      <div className='pt-4'>
          <Navbar>
            <Container>
              <Nav className="w-100">
                <NavLink to={'/vip'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إستعلام المستخدم
                </NavLink>
                <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  سجل الهدايا
                </NavLink>
                <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  تغير المعرف (ID)
                </NavLink>
                <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-funnel me-2"></i>
                  فلتر
                </NavLink>
                <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link addActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إضافة
                </NavLink>
                <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} rounded-3 ms-auto border-0 btn fs12 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                  مسح الكل
                </NavLink>
              </Nav>
            </Container>
          </Navbar>

      </div>


      {/* content VIP */}
      <div>
        <Outlet />
      </div>


      {/* modals: first => (تغير المعرف). second => (مسح الكل). */}
      <ModalChange />
      <ModalDelete />
    </>
  )
}
