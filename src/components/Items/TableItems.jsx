import React, { useEffect, useState } from 'react';
import style from './Items.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import { useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Url, baseUrl } from '../../helpers/constant.js';

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
      <span className="py-2 badge text-main rounded fs15 border">
        #
      </span>
    </div>
  ),
  selectionRenderer: ({ mode, ...rest }) => (
    <>
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest}
        onChange={(e) => console.log(e.target.checked)} />
      <span className='text-main fs15 py-'>{rest.rowIndex + 1}</span>
    </>
  ),

};


const rows = [
  { id: 1, title_ar: 'سيارة', getGift: 'شراء', gift_type: 'هدية دخول خاصة', price: 10000, active: 'نشيط', image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", created_at: '7 أيام' },
  { id: 2, title_ar: 'سيارة', getGift: 'شراء', gift_type: 'هدية دخول خاصة', price: 10000, active: 'غير نشيط', image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", created_at: '7 أيام' },
  { id: 3, title_ar: 'سيارة', getGift: 'شراء', gift_type: 'هدية دخول خاصة', price: 10000, active: 'غير نشيط', image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", created_at: '7 أيام' },
];



let rowsData = [];





export default function TableItems() {
  const columns = [
    {
      dataField: 'title_ar', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-gift me-2"></i>
        إسم الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'getGift', //must be same name of property in row which come from api
      text: 'getGift',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-hand-holding-heart me-2"></i>
        الحصول على الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      // attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'gift_type', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-arrow-down-short-wide me-2"></i>
        نوع الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'price', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-1 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-dollar-sign me-1 fs12 rounded-circle border-1 border-dark border p-1 w-25 h-25"></i>
        سعر الهدية
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'active', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الهدايا
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => activeState == 1 ?
        <span onClick={() => {
          // updateActive(id);
          // refetch();
        }} className={`badge py-2 px-4 curser-pointer bg-green`}>نشيط</span> :
        <span onClick={() => {
          // updateActive(id);
          // refetch();
        }} className={`badge py-2 px-4 curser-pointer bg-red`}>غير نشيط</span>
    },
    {
      dataField: 'image', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-file-image me-2"></i>
        صورة الهدايا
      </span>,
      classes: 'text-main fs15 pt-2 px-0 pb-0',
      formatter: (cell, row) => <img loading='lazy' src={row.image} width={30} alt={`Flag of ${row.title_ar}`} />,
    },
    {
      dataField: 'created_at', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-clock me-2"></i>
        الوقت
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



  let dispatch = useDispatch();

  let [currentPage, setCurrentPage] = useState(1);
  const [activeState, setActiveState] = useState(1);




  // https://fakestoreapi.com/products
  // ${baseUrl}/gifts/dashboard?limit=9&page=${page}
  function getItem(currentPage) {
    console.log('page: ', currentPage);
    return axios.get(`${Url}/gifts/dashboard?limit=9&page=1`);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('item', getItem, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });
  console.log(data);
  // rowsData = data?.data;
  // console.log(rowsData);
  // console.log(isLoading);
  // console.log(isFetching);



  // function updateActive(id) {
  //   let { data } = axios.patch(`${baseUrl}/gifts/dashboard/${id}`);
  //   setActiveState(data?.active);
  // }



  // useEffect(()=>{
  //   getItem(1);
  // },[])


  function increase() {
    currentPage += 1;
    setCurrentPage(currentPage);
    getItem(currentPage);
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

      {/* table */}
      {/* Check if data is loading */}
      {false ? (
        <></>
      ) : (


        <div className='d-flex flex-column h-100 justify-content-between'>



          <BootstrapTable
            keyField="id"
            data={rows}
            columns={columns}
            bordered={false}
            classes={`${style.tableHeader} text-center table-borderless my-4 ${style.tableWidth} ms-1 `}
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
              <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">{currentPage}</div>
              <i onClick={decrease} className="fa-solid fa-caret-left curser-pointer"></i>
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



        </div>
      )}


    </>
  );
}


































{/* <div className='pt-4 pb-3'>
          <Table className='text-center table-borderless'>
            <thead>
              <tr>
                <th className='p-0 '>
                  <div className="border badge p-0">
                    <input className='form-check-input border-1 border-dark-subtle p-2 mt-2 mx-1 shadow-none' type="checkbox" />
                    <span className="py-2 badge text-main rounded fs13 border">
                      #
                    </span>
                  </div>
                </th>

                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-gift me-2"></i>
                  إسم الهدايا
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-hand-holding-heart me-2"></i>
                  الحصول على الهدايا
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-arrow-down-short-wide me-2"></i>
                  نوع الهدايا
                </span></th>
                <th className='p-0 '><span className=" py-1 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-dollar-sign me-1 fs12 rounded-circle border-1 border-dark border p-1 w-25 h-25"></i>
                  سعر الهدية
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  حالة الهدايا
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="bi bi-file-image me-2"></i>
                  صورة الهدايا
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-regular fa-clock me-2"></i>
                  الوقت
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-pen me-2"></i>
                  التعديل والحذف والطباعة
                </span></th>
              </tr>
            </thead>

            <tbody>

              <tr className={`${style.rowShadow} my-3 py-3`}>
                <td className='text-main fs15'>
                  <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                  1
                </td>
                <td className='text-main fs15'>سيارة</td>
                <td className='text-main fs15'>شراء</td>
                <td className='text-main fs15'>هدية دخول خاصة</td>
                <td className='text-main fs15'>10000</td>
                <td className='text-main fs15'><span className='badge bg-green py-2 px-4'>نشيط</span></td>
                <td className='text-main fs15'>7 أيام</td>
                <td className='text-main fs15'>
                  <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                </td>
              </tr>
              <tr className={`${style.rowShadow} my-3 py-3`}>
                <td className='text-main fs15'>
                  <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                  1
                </td>
                <td className='text-main fs15'>سيارة</td>
                <td className='text-main fs15'>شراء</td>
                <td className='text-main fs15'>هدية دخول خاصة</td>
                <td className='text-main fs15'>10000</td>
                <td className='text-main fs15'><span className='badge bg-green py-2 px-4'>نشيط</span></td>
                <td className='text-main fs15'>7 أيام</td>
                <td className='text-main fs15'>
                  <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                </td>
              </tr>
              <tr className={`${style.rowShadow} my-3 py-3`}>
                <td className='text-main fs15'>
                  <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                  1
                </td>
                <td className='text-main fs15'>سيارة</td>
                <td className='text-main fs15'>شراء</td>
                <td className='text-main fs15'>هدية دخول خاصة</td>
                <td className='text-main fs15'>10000</td>
                <td className='text-main fs15'><span className='badge bg-green py-2 px-4'>نشيط</span></td>
                <td className='text-main fs15'>7 أيام</td>
                <td className='text-main fs15'>
                  <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div> */}
