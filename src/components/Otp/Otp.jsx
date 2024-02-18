import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalChange from '../ModalChange/ModalChange.jsx';
import style from './Otp.module.css';
import { DropdownMenu } from 'react-bootstrap';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowChangeId, handleShowDelete, handleShowDeleteRow, handleShowEditRow, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Url } from '../../helpers/constant.js';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';

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
        onChange={(e) => e}
      />
      <span className="py-2 badge text-main rounded fs13 border">
        #
      </span>
    </div>
  ),
  selectionRenderer: ({ mode, ...rest }) => (
    <>
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest} onChange={(e) => e} />
      <span className='text-main fs15'>{rest.rowIndex + 1}</span>
    </>
  )
};


// const rows = [
//   { id: 1, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "نشيط", date: '2023-11-21 T 08:13:16' },
//   { id: 2, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "غير نشيط", date: '2023-11-21 T 08:13:16' },
// ];





export default function Otp() {
  const columns = [
    {
      dataField: 'name', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'phone', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-telephone-plus me-2"></i>
        رقم الهاتف
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      // formatter: (cell, row) => `+${cell}`,
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'email', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-regular fa-envelope-open me-2"></i>
        البريد الإلكتروني
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'active', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الحساب
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => data?.data?.data.map((moder) => {
        if (id === moder.id) {
          if (moder.active === 1) {
            return <span key={id} onClick={() => updateActive(id)} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
          }
          else {
            return <span key={id} onClick={() => updateActive(id)} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
          }
        }
      })
    },
    {
      dataField: 'timeStop', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-regular fa-clock me-2"></i>
        مدة الإيقاف
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: () => <span className='badge bg-red py-2 px-4 fs15 fw-bold'>غير محددة</span>
    },
    {
      dataField: 'created_at', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-regular fa-calendar me-2"></i>
        تاريخ التسجيل
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'edit', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-pen me-2"></i>
        التعديل والحذف والطباعة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => <>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowEditRow(id))} className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];

  let { showChangeId, showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();






  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageModerators');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageModerators', currentPage);
  }, [currentPage]);



  function getData() {
    return axios.get(`${Url}/admins?limit=10&page=${currentPage}`);
  }
  let { data, isLoading, refetch } = useQuery('moderator', getData, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });
  // console.log(data?.data.data)

  async function updateActive(id) {
    let { data } = await axios.patch(`${Url}/admins/dashboard/${id}`);
    refetch();
  }


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
      <div className={`${style.heightItems}`}>
        {/* moderators nav links */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className={`justify-content-between align-items-start`}>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تغير المعرف (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تحديد شارة (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-1 mx-xl-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
            </Nav>

            <Nav className={`${style.widthNavDelete} justify-content-center pe-5 mt-3 mt-xxl-0`}>
              <div className={`position-relative rounded-2 ${style.searchWidth}`}>
                <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
                <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-1 bg-search border-0 ps-5 h-100`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
              </div>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} ${style.flexNone} ms-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>

          </Navbar>
        </div>


        {/* table otp */}
        {isLoading ? <></> :
          <div className='d-flex flex-column h-100 justify-content-between'>

            <div className={`${style.heightTable} overflow-auto`}>

              < BootstrapTable
                keyField="id"
                data={data?.data?.data}
                columns={columns}
                bordered={false}
                classes={`${style.tableHeader} text-center table-borderless mt-2 mt-xl-4 ${style.tableWidth} ms-4`}
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
                <div className="numPage text-center p-1 fs15 text-white mx-2 rounded-circle bg-main">{currentPage + 1}</div>
                <i onClick={decrease} className="fa-solid fa-caret-left curser-pointer"></i>
              </div>
              <div className='mx-2'>
                <Dropdown>
                  <Dropdown.Toggle className={`${style.borderDropdown} px-2 pb-0 border-top-0 border-start-0 border-end-0 border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
                    30
                  </Dropdown.Toggle>
                  <DropdownMenu>
                    <Dropdown.Item >25</Dropdown.Item>
                    <Dropdown.Item >20</Dropdown.Item>
                    <Dropdown.Item >10</Dropdown.Item>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        }





        {/* modals: first => (تغير المعرف). second => (مسح الكل).  */}
        <ModalChange />
        <ModalDelete />
        <ModalUserQuery />
      </div>
    </>
  )
}







