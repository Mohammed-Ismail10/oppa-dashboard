import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../SideBar/SideBar.jsx'
// import style from './Layout.module.css';


export default function Layout() {

  let { pathname } = useLocation();





  return (
    <>
      <section>
        <div className="container-fluid px-0">
          <div className="row g-0">

            {pathname === '/login' ? null : <div className="col-xxl-2 col-3" >
              <SideBar />
            </div>}


            <div className={`${pathname === '/login' ? 'col-lg-12' : 'col-xxl-10 col-12 col-md-9 '} vh-100`}>
              <Outlet />
            </div>


          </div>
        </div>
      </section>
    </>
  )
}
