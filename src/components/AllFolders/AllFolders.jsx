import React from 'react'
import style from './AllFolders.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalChange from '../ModalChange/ModalChange.jsx';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowChangeId, handleShowDelete } from '../Redux/ModalsSlice.js';
import BootstrapTable from 'react-bootstrap-table-next';


// For column checkbox
const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
    <div className="border badge p-0">
      <input
        type="checkbox"
        className='form-check-input border-1 border-dark-subtle p-2 mt-2 mx-1 shadow-none'
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        {...rest}
        onChange={(e) => console.log(e.target)}
      />
      <span className="py-2 badge text-main rounded fs13 border">
        #
      </span>
    </div>

  ),
  selectionRenderer: ({ mode, ...rest }) => (
    <>
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest} onChange={(e) => console.log(e.target)} />
      <span className='text-main fs15'>{rest.rowIndex + 1}</span>
    </>
  )
};



const rows = [
  { id: 1, name: 'يوسف رجب', mId: 2563254 },
  { id: 2, name: 'يوسف رجب', mId: 2563254 },

];






export default function AllFolders() {
  const columns = [
    {
      dataField: 'name', //must be same name of property in row which come from api
      test: '',
      headerFormatter: () => <span className='py-2 w-75 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'mId', //must be same name of property in row which come from api
      test: '',
      headerFormatter: () => <span className='py-2 w-75 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'allFoldersInDatabase', //must be same name of property in row which come from api
      test: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-file-lines me-2"></i>
        جميع المستندات المتواجدة على قاعدة البيانات
      </span>,
      classes: 'text-main fs15 pt-3 d-flex justify-content-between align-items-center px-5',
      formatter: (cell, row) => <>
        <div>
          <i className="bi bi-file-image ms-2"></i>
          Passport.png
          <i className={`${style.fs5} fa-solid fa-circle mx-2 fw-bold`}></i>
          <span className='text-primary'>Preview</span>
        </div>
        <div className='text-body-tertiary'>5.35MB</div>
      </>,
      attrs: () => ({ 'dir': `ltr` }),
    },
  ];


  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();






  return (
    <>
      <div className={`${style.heightItems}`}>
        {/* items nav links */}
        <div className='pt-5 mt-3 ps-2'>
          <Navbar>
            <Nav className="w-100 px-2">
              <NavLink to={'g'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 d-flex align-items-center text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={''} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 d-flex align-items-center text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 d-flex align-items-center text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 d-flex align-items-center text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تحديد شارة (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <div className={`${style.searchWidth} mx-3 position-relative`}>
                <input className={`${style.shadowSearch} ${style.searchInput} w-100 form-control px-5 py-2 bg-search`} type="search" placeholder='يمكنك البحث هنا' name="" id="" />
                <div className='position-absolute h-100 top-0 d-flex justify-content-center align-items-center px-3'>
                  <i className="fa-solid fa-magnifying-glass text-main"></i>
                </div>
              </div>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                مسح الكل
              </NavLink>
            </Nav>
          </Navbar>
        </div>

        <div className='d-flex flex-column h-100 justify-content-between'>

          {/* table all folders */}
          <BootstrapTable
            keyField="id"
            data={rows}
            columns={columns}
            bordered={false}
            classes={`${style.tableHeader} text-center table-borderless my-4 ${style.tableWidth} `}
            selectRow={selectRow}
            rowClasses={`${style.rowShadow} `}
          />


          {/* pagination */}
          <div className='d-flex justify-content-center align-items-center'>
            <div className='mx-2'>
              <span className='text-main fs15'>الصفحة</span>
            </div>
            <div className='mx-2 d-flex align-items-center'>
              <i className="fa-solid fa-caret-right curser-pointer"></i>
              <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">1</div>
              <i className="fa-solid fa-caret-left curser-pointer"></i>
            </div>
            <div className='mx-2'>
              <Dropdown>
                <Dropdown.Toggle className={`${style.borderDropdown} px-0 border-top-0 border-start-0 border-end-0  border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
                  30
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >25</Dropdown.Item>
                  <Dropdown.Item >20</Dropdown.Item>
                  <Dropdown.Item >10</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

        </div>


        {/* Modals */}
        <ModalChange />
        <ModalDelete />
      </div>
    </>
  )
}





























{/* <div className='pt-4 pb-3'>
          <Table hover className='text-center table-borderless'>
            <thead>
              <tr>
                <th className='p-0 '>
                  <div className="border badge p-0">
                    <input className='form-check-input border-1 border-dark-subtle p-2 mt-2 mx-1 shadow-none' type="checkbox" />
                    <span className={`py-2 badge text-main rounded fs13 border`}>
                      #
                    </span>
                  </div>
                </th>

                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-user me-2"></i>
                  الإسم
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-user me-2"></i>
                  معرف ال (ID)
                </span></th>
                <th className='p-0 '><span className=" w-100 py-2 badge text-main rounded fs13 border">
                  <i className="fa-regular fa-file-lines me-2"></i>
                  جميع المستندات المتواجدة على قاعدة البيانات
                </span></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='text-main fs15'>
                  <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                  1
                </td>
                <td className='text-main fs15'>يوسف رجب</td>
                <td className='text-main fs15'>2563254</td>
                <td dir='ltr' className='text-main fs15 d-flex justify-content-between align-items-center px-5'>
                  <div>
                    <i className="bi bi-file-image ms-2"></i>
                    Passport.png
                    <i className={`${style.fs5} fa-solid fa-circle mx-2 fw-bold`}></i>
                    <span className='text-primary'>Preview</span>
                  </div>
                  <div className='text-body-tertiary'>5.35MB</div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div> */}