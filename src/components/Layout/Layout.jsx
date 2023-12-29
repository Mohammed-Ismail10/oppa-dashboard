import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar.jsx'
import style from './Layout.module.css';


export default function Layout() {


  let token = null;
  return (
    <>
      <section className=''>
        <div className="container-fluid ps-0 h-100">
          <div className="d-flex h-100">

            <div className="col-xxl-2 col-lg-3 h-lg-100 ">
              <SideBar />
            </div>

            <div className={` col-xxl-10   col-lg-9 `}>
              <Outlet />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
