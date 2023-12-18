import React, { useState } from 'react'
import { handleShowChangeId, handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './Vip.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { baseUrl } from '../../helpers/constant.js';


// For column checkbox
const selectRow = {
  mode: 'checkbox',
  // clickToSelect: true,
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
  { id: 1, arName: 'أيقونة VIP', enName: 'VIP ICON', privImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", time: '2023-11-21 T 08:13:16' },
  { id: 2, arName: 'أيقونة VIP', enName: 'VIP ICON', privImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", time: '2023-11-21 T 08:13:16' },
];



export default function EnableFeature() {
  const columns = [
    {
      dataField: 'arName', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-crown me-2"></i>
        ID فئة الVIP
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'enName', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-crown me-2"></i>
        ID الPrivileges
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      // attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'giftState', //must be same name of property in row which come from api
      text: 'giftState',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الحساب
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => activeState == 1 ? <span className={`badge py-2 px-4 curser-pointer bg-green`}>نشيط</span> : <span className={`badge py-2 px-4 curser-pointer bg-red`}>غير نشيط</span>
    },
    {
      dataField: 'time', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-100'>
        <i className="fa-regular fa-clock me-2"></i>
        أنشئت في
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'edit', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-pen me-2"></i>
        التعديل والحذف والطباعة
      </span>,
      classes: 'text-main fs15 pt-3 px-0 ',
      formatter: (_, { id }) => <>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];


  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();


  const [activeState, setActiveState] = useState(1);
  let [currentPage, setCurrentPage] = useState(1);


  function getItem(page) {
    return axios.get(`${baseUrl}/gifts/dashboard?limit=9&page=${page}`);
  }
  let { data, isLoading, refetch, isError } = useQuery('item', getItem, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });
  console.log(data);
  console.log(isError);



  function updateActive(id) {
    let { data } = axios.patch(`${baseUrl}/gifts/dashboard/${id}`);
    setActiveState(data?.active);
  }



  function increase() {
    currentPage += 1;
    setCurrentPage(currentPage);
  }
  function decrease() {
    currentPage -= 1;
    if (currentPage <= 0) {
      currentPage = 1;
      setCurrentPage(currentPage);
      getItem(currentPage);
    }
    else {
      setCurrentPage(currentPage);
      getItem(currentPage);
    }
  }









  return (
    <>

      {/* Nav links for Vip */}
      <div className='pt-5 mt-3'>
        <Navbar>
          <Nav className="w-100 px-2">
            <NavLink to={'/vip'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
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
            <NavLink to={'/vip/add'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة VIP
            </NavLink>
            <NavLink to={'/showproperties'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              عرض الخصائص
            </NavLink>
            <NavLink to={''} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              تمكين خاصية
            </NavLink>
            <NavLink to={'/addenablefeature'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة تمكين خاصية
            </NavLink>
            <NavLink to={''} onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
              مسح الكل
            </NavLink>
          </Nav>
        </Navbar>

      </div>


      <div className={`${style.heightItems} d-flex flex-column justify-content-between`}>


        {/* table */}
        {/* {isLoading?<></>:
    } */}
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
          bordered={false}
          classes={`${style.tableHeader} text-center table-borderless my-4 ${style.tableWidthEnable} ms-1`}
          selectRow={selectRow}
          rowClasses={`${style.rowShadow} `}

        />

        {/* pagination */}
        <div className='d-flex justify-content-center align-items-center'>
          <div className='mx-2'>
            <span className='text-main fs15'>الصفحة</span>
          </div>
          <div className='mx-2 d-flex align-items-center'>
            <i onClick={increase} className="fa-solid fa-caret-right curser-pointer"></i>
            <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">1</div>
            <i onClick={decrease} className="fa-solid fa-caret-left curser-pointer"></i>
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

      {/* <ModalDelete /> */}
      <ModalDelete />
    </>
  )
}
