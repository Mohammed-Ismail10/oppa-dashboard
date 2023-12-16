import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import style from './RoomCategories.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


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
      {rest.rowIndex + 1}
    </>
  )
};


const rows = [
  { id: 1, name: 'يوسف رجب', mId: 523654, roomName: "الرجل الغامض", roomType: "دردشة", roomImg: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', roomState: 'نشيط' },
  { id: 2, name: 'يوسف رجب', mId: 523654, roomName: "الرجل الغامض", roomType: "دردشة", roomImg: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', roomState: 'غير نشيط' },
];



export default function RoomCategories() {
  const columns = [
    {
      dataField: 'name',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'mId',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'roomName',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-door-open me-2"></i>
        إسم الغرفة
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'roomType',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className={`${style.refliction} fa-solid fa-arrow-down-short-wide me-2`}></i>
        نوع الغرفة
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'roomImg',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-file-image me-2"></i>
        صورة الغرفة
      </span>,
      classes: 'text-main fs15',
      formatter: (cell, row) => <img src={row.roomImg} width={35} alt={`Flag of ${row.name}`} />,
    },
    {
      dataField: 'roomState',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الغرفة
      </span>,
      classes: 'text-main fs15',
      formatter: (cell, row) => row.roomState === 'نشيط' ? <span className='badge bg-green py-2 px-4'>نشيط</span> : <span className='badge bg-red py-2 px-3'>غير نشيط</span>
    },
    {
      dataField: 'edit',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-pen me-2"></i>
        التعديل والحذف والطباعة
      </span>,
      classes: 'text-main fs15',
      formatter: (_, { id }) => <>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];


  let { showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();







  return (
    <>
      <section>


        {/* nav */}
        <div className='pt-4'>
          <Navbar>
            <Container>
              <Nav className="w-100">
                <NavLink to={''} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إستعلام المستخدم
                </NavLink>
                <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  سجل الهدايا
                </NavLink>
                <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-funnel me-2"></i>
                  فلتر
                </NavLink>
                <div className='d-flex justify-content-start shadow-sm'>
                  <Dropdown dir='ltr'>
                    <Dropdown.Toggle className='bg-body-secondary border-0 h-100 text-main fw-bold fs15 rounded-0' size='sm' id="dropdown-basic">
                      الوكالة
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='mt-0'>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className='position-relative'>
                    <input className={`${style.searchInput} shadow-none h-100 rounded-0 form-control ps-5 pe-0 py-0 bg-body-secondary`} type="search" placeholder='يمكنك البحث هنا' name="" id="" />
                    <i className="fa-solid fa-magnifying-glass position-absolute bottom-0 pb-2 ps-3"></i>
                  </div>
                </div>
                <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} rounded-3 ms-auto border-0 btn fs12 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                  مسح الكل
                </NavLink>
              </Nav>
            </Container>
          </Navbar>
        </div>


        {/* Table coins*/}
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
          bordered={false}
          hover
          classes={`${style.tableHeader} text-center table-borderless my-4 `}
          selectRow={selectRow}
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
              <Dropdown.Toggle className={`${style.borderDropdown} px-0 border-top-0 border-start-0 border-end-0 border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
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


        {/* modals */}
        <ModalDelete />


      </section>
    </>
  )
}
