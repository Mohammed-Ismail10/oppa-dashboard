import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './Countries.module.css';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow, handleShowUserQuery } from '../Redux/ModalsSlice.js';
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
  { id: 1, countryName: 'السعودية', code: '+966', flag: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", state: 'نشيط' },
  { id: 2, countryName: 'السعودية', code: '+966', flag: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", state: 'غير نشيط' },
  { id: 3, countryName: 'المغرب', code: '+966', flag: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", state: 'غير نشيط' },
];






export default function Countries() {
  const columns = [
    {
      dataField: 'countryName',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-flag me-2"></i>
        إسم الدولة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'code',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-telephone-plus me-2"></i>
        كود الاتصال
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'flag',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-flag me-2"></i>
        العلم
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (cell, row) => <img loading='lazy' src={row.flag} width={30} alt={`Flag of ${row.title_ar}`} />,
    },
    {
      dataField: 'state',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الدول
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) =>
        data?.data?.data.map((gift) => {
          if (id == gift.id) {
            if (gift.active == 1) {
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
    const storedPage = localStorage.getItem('currentPageCountries');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageCountries', currentPage);
  }, [currentPage]);



  function getCountries() {
    return axios.get(``);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('country', getCountries, {
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
        <div className='pt-5 mt-3 ps-3'>
          <Navbar>
            <Nav className="w-100 pe-2 flex-wrap ps-xl- ps-4">
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
            <Nav className={`${style.flexNone} align-items-start mb-5  mb-xl-0 pb-1 pb-xl-0 ms-xxl-auto`}>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-1 px-3 rounded-3 border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white `}>
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

  );
};


































// modal delete row
// const [selectedRowId, setSelectedRowId] = useState(null);
// const [showDeleteIcon, setShowDeleteIcon] = useState(false);
// function handleCloseDeleteIcon() {
//   setShowDeleteIcon(false);
// }
// function handleShowDeleteIcon(id) {
//   setSelectedRowId(id);
//   setShowDeleteIcon(true);
// }