import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Transfers.module.css';
import { Nav, Navbar } from 'react-bootstrap';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import ModalUserQuery from '../ModalUserQuery/ModalUserQuery.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowUserQuery } from '../Redux/ModalsSlice.js';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useQuery } from 'react-query';
import { handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import invoice from '../../Assets/Images/invoice.png';
import payment from '../../Assets/Images/payment.png';
import coins from '../../Assets/Images/coins.png';
import dolar from '../../Assets/Images/dolar.png';


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
      <span className="py-2 badge text-main rounded fs15 border">
        #
      </span>
    </div>
  ),
  selectionRenderer: ({ mode, ...rest }) => (
    <>
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest}
        onChange={(e) => e} />
      <span className='text-main fs15 py-'>{rest.rowIndex + 1}</span>
    </>
  ),

};


const rows = [
  { id: 1, mid: 25, dollar: '500 $', coins: 10, payment: 'Google Wallet', active: 1, invoiceNum: 23, loginDate: '	2023-10-25T11:24:02.000Z' },
  { id: 2, mid: 25, dollar: '500 $', coins: 10, payment: 'Google Wallet', active: 1, invoiceNum: 23, loginDate: '	2023-10-25T11:24:02.000Z' },
];

export default function Transfers() {
  const columns = [
    {
      dataField: 'mid', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'dollar',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={dolar} alt="dolar" width={20} />
        المبلغ المدفوع بالدولار
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'coins',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={coins} alt="coins" width={16} />
        الكوينز المشحونة
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'payment', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={payment} alt="payment" width={16} />
        طريقة الدفع
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'active', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        الحالة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) =>
        data?.data?.data.map((transfer) => {
          if (id === transfer.id) {
            if (transfer.active === 1) {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
            }
            else {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
            }
          }
        })
    },
    {
      dataField: 'invoiceNum',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={invoice} alt="invoice" width={12} />
        رقم التسجيل
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'loginDate',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-100'>
        <i className="fa-regular fa-calendar me-2"></i>
        تاريخ التسجيل
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
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


  const dispatch = useDispatch();


  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageTransfer');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageTransfer', currentPage);
  }, [currentPage]);



  function getData() {
    return axios.get(``);
  }
  let { data, isLoading, refetch } = useQuery('transfer', getData, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });



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





  const { showDelete, showUserQuery } = useSelector(({ modals }) => modals)



  return (
    <>
      <div className={`${style.heightItems} `}>

        {/* nav */}
        <div className='pt-5 mt-3 ms-4'>
          <Navbar className={`justify-content-between align-items-start`}>
            <Nav className="flex-wrap">
              <NavLink onClick={() => dispatch(handleShowUserQuery())} className={`${style.shadowBtn} ${style.itemsHover} mt-3 mt-xxl-0 me-2 border-0 btn fs15 text-main fw-bold nav-link ${showUserQuery ? 'itemsActive' : ''}  bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إستعلام المستخدم
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mt-3 mt-xxl-0 mx-2 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
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


        <div className="h-100">
          {isLoading ? (
            <></>
          ) : (


            <div className='d-flex flex-column h-100 justify-content-between'>

              {/* table */}
              <div className={`${style.heightTable} overflow-auto `}>
                <BootstrapTable
                  keyField="id"
                  data={rows}
                  columns={columns}
                  bordered={false}
                  classes={`${style.tableHeader} ${style.tableWidth} text-center table-borderless mt-2 mt-xl-4 ms-4`}
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
          )}
        </div>








        {/* modals */}
        <ModalDelete />
        <ModalUserQuery />

      </div>
    </>
  );
}
