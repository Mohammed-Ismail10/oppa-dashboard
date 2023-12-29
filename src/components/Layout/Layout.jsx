import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../SideBar/SideBar.jsx'
import style from './Layout.module.css';


export default function Layout() {

  let { pathname } = useLocation();





  return (
    <>
      <section className='h-100'>
        <div className="container-fluid ps-0 h-100">
          <div className="d-flex h-100">

            {pathname == '/login' ? null : <div className="col-xxl-2 col-lg-3 h-lg-100 ">
              <SideBar />
            </div>}


            <div className={`${pathname == '/login' ? 'col-xxl-12 col-lg-12' : 'col-xxl-10 col-lg-9'} overflow-scroll h-100 bg-success`}>
              <Outlet />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
