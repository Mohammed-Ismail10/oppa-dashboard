import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './FamilyLevel.module.css';
import { Nav, Navbar } from 'react-bootstrap';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';

export default function FamilyLevel() {







  return (
    <>
      <div className={`${style.heightItems} `}>

        {/* nav */}
        <div className='pt-5 mt-3'>
          <Navbar>
            <Nav className="w-100 pe-2">
              <NavLink to={'add'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link bg-white addActive`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
            </Nav>
          </Navbar>
        </div>


        <div className="h-100">
          <Outlet />
        </div>


        {/* modals */}
        <ModalDelete />

      </div>
    </>
  )
}
