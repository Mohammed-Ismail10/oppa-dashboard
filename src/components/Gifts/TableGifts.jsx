import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import style from './Gifts.module.css';
import { handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import dollar from '../../Assets/Images/dollarC.png';


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
  { id: 1, mid: 25, title_ar: 'السيارة', active: 1, giftImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", gift_type: 'ساخن', price: 10000000 },
  { id: 2, mid: 25, title_ar: 'السيارة', active: 1, giftImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", gift_type: 'ساخن', price: 10000000 },
];





export default function TableGifts() {
  const columns = [
    {
      dataField: 'mid', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'title_ar', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-'>
        <i className="fa-solid fa-gift me-2"></i>
        إسم الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'giftImg', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
        <i className="bi bi-file-image me-2"></i>
        صورة الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (cell, row) => <img loading='lazy' src={row.giftImg} width={55} alt={`Flag of ${row.title_ar}`} />,
    },
    {
      dataField: 'active', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) =>
        data?.data?.data.map((gift) => {
          if (id === gift.id) {
            if (gift.active === 1) {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
            }
            else {
              return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
            }
          }
        })
    },
    {
      dataField: 'gift_type', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-'>
        <i className="fa-solid fa-arrow-down-short-wide me-2"></i>
        نوع الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'price', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-1 badge text-main rounded fs15 border w-'>
        <img className='me-2' src={dollar} alt="dollar" width={23} />
        سعر الهدية
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'edit', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border w-75'>
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



  let dispatch = useDispatch();


  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageGifts');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageGifts', currentPage);
  }, [currentPage]);



  function getData() {
    return axios.get(``);
  }
  let { data, isLoading, refetch } = useQuery('gift', getData, {
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











  return (
    <>
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
    </>
  )
}
