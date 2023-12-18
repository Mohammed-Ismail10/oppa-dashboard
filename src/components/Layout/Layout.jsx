import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar.jsx'

export default function Layout() {
  return (
    <>
      <section>
        <div className="container-fluid ps-0">
          <div className="row">

            <div className="col-2 ps-">
              <SideBar />
            </div>

            <div className="col-10 px-">
              <Outlet />
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
