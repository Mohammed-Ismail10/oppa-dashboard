import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import style from './RoomCategories.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
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
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'mId',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'roomName',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-door-open me-2"></i>
        إسم الغرفة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'roomType',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className={`${style.refliction} fa-solid fa-arrow-down-short-wide me-2`}></i>
        نوع الغرفة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'roomImg',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-file-image me-2"></i>
        صورة الغرفة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (cell, row) => <img src={row.roomImg} width={35} alt={`Flag of ${row.name}`} />,
    },
    {
      dataField: 'roomState',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الغرفة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) =>
        data?.data?.data.map((room) => {
          if (id == room.id) {
            if (room.active == 1) {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
            }
            else {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
            }
          }
        })
    },
    {
      dataField: 'edit',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
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


  let { showDelete, showUserQuery } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageRoom');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageRoom', currentPage);
  }, [currentPage]);



  function getRoomCategories() {
    return axios.get(``);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('category', getRoomCategories, {
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
      <div className={`${style.heightItems}`}>


        {/* nav */}
        <div className='pt-5 mt-3 ms-3 ms-xxl-4'>
          <Navbar className={`justify-content-between align-items-start ${style.navWidth}`}>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover}  mt-3 mt-xxl-0 me-0 me-xl-3 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'/allfolders'} className={`${style.shadowBtn} ${style.itemsHover}  mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                سجل الهدايا
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn}  mt-3 mt-xxl-0 mx-1 mx-xl-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <div className={`${style.searchWidth} position-relative mt-3 mt-xl- mt-xxl-0`}>
                <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
                <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-0 bg-search border-0 ps-5`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
              </div>
            </Nav>
            <Nav className={`${style.flexNone} mt-3 mt-xxl-0`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-3 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
                مسح الكل
              </NavLink>
            </Nav>
          </Navbar>
        </div>


        {isLoading ? <></> :
          <div className='d-flex flex-column h-100 justify-content-between'>
            {/* Table */}
            <div className={`${style.heightTable} overflow-auto `}>

              <BootstrapTable
                keyField="id"
                data={rows}
                columns={columns}
                bordered={false}
                classes={`${style.tableHeader} ${style.tableWidth} text-center table-borderless mt-2 mt-xl-4 ms-3`}
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
                <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">{currentPage + 1}</div>
                <i onClick={decrease} className="fa-solid fa-caret-left curser-pointer"></i>
              </div>
              <div className='mx-2'>
                <Dropdown>
                  <Dropdown.Toggle className={`${style.borderDropdown} px-2 pb-0 border-top-0 border-start-0 border-end-0 border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
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
        }


        {/* modals */}
        <ModalDelete />
        <ModalUserQuery />

      </div>
    </>
  )
}
