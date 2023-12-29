import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import style from './Vip.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import BootstrapTable from 'react-bootstrap-table-next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
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




export default function ShowProperties() {
  const columns = [
    {
      dataField: 'arName', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-crown me-2"></i>
        إسم الـ Privileges بالعربي
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'enName', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-crown me-2"></i>
        إسم الـ Privileges بالــ EN
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      // attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'privImg', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-file-image me-2"></i>
        صورة الـ Privileges
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (cell, row) => <img loading='lazy' src={row.privImg} width={55} alt={`Flag of ${row.vipName}`} />,
    },
    {
      dataField: 'giftState', //must be same name of property in row which come from api
      text: 'giftState',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الحساب
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) =>
        data?.data?.data.map((pro) => {
          if (id == pro.id) {
            if (pro.active == 1) {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
            }
            else {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
            }
          }
        })
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
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => <>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];


  let { showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();




  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageShowProperty');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageShowProperty', currentPage);
  }, [currentPage]);



  function getProperty() {
    return axios.get(``);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('property', getProperty, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });


  // async function updateActive(id) {
  //   let { data } = await axios.patch(`${Url}/gifts/dashboard/${id}`);
  //   refetch();
  // }

  function increase() {
    currentPage += 1;
    setCurrentPage(currentPage);
    refetch();
  }

  function decrease() {
    currentPage -= 1;
    if (currentPage < 0) {
      currentPage = 0;
      setCurrentPage(currentPage);
      refetch();
    }
    else {
      setCurrentPage(currentPage);
      refetch();
    }
  }









  return (
    <>
      {/* nav links of show property */}
      <div className='pt-5 mt-3'>
        <Navbar>
          <Nav className="w-100 pe-2">
            <NavLink to={'/addproperty'} className={`${style.shadowBtn} ${style.addItemHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link addActive bg-white`}>
              <i className="bi bi-plus-circle me-2"></i>
              إضافة خاصية
            </NavLink>
            <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
              مسح الكل
            </NavLink>
          </Nav>
        </Navbar>

      </div>


      <div className={`${style.heightItems} d-flex flex-column justify-content-between`}>

        {/* table */}
        {/* {isLoading ? <></> :
        } */}
        <div className={`${style.heightTable} overflow-auto`}>
          <BootstrapTable
            keyField="id"
            data={rows}
            columns={columns}
            bordered={false}
            classes={`${style.tableHeader} text-center table-borderless mt-2 mt-xl-4 ${style.tableWidthShowProperties} ms-1`}
            selectRow={selectRow}
            rowClasses={`${style.rowShadow} `}
          />
        </div>

        
        {/* pagination */}
        <div className='d-flex justify-content-center align-items-center'>
          <div className='mx-2'>
            <span className='text-main fs15'>الصفحة</span>
          </div>
          <div className='mx-2 d-flex align-items-center'>
            <i onClick={increase} className="fa-solid fa-caret-right curser-pointer"></i>
            <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">{currentPage}</div>
            <i onClick={decrease} className="fa-solid fa-caret-left curser-pointer"></i>
          </div>
          <div className='mx-2'>
            <Dropdown>
              <Dropdown.Toggle className={`${style.borderDropdown} px-2 pb-0 border-top-0 border-start-0 border-end-0  border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
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

      <ModalDelete />
    </>
  )
}
