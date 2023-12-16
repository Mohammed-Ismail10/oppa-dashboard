import React, { useState } from 'react';
import style from './Vip.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import BootstrapTable from 'react-bootstrap-table-next';
import { useQuery } from 'react-query';
import axios from 'axios';
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
  { id: 1, vipName: 'VIP 1', vipLevel: 1, vipPrice: 10000, vipImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", time: '7 أيام' },
  { id: 2, vipName: 'VIP 1', vipLevel: 1, vipPrice: 10000, vipImg: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", time: '7 أيام' },
];





export default function TableVip() {
  const columns = [
    {
      dataField: 'vipName', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-gift me-2"></i>
        إسم الVIP
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'vipLevel', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-layer-group me-2"></i>
        مستوى الVIP
      </span>,
      classes: 'text-main fs15',
      // attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'vipPrice', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-1 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-dollar-sign me-1 fs12 rounded-circle border-1 border-dark border p-1 w-25 h-25"></i>
        سعر الVIP
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'vipImg', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-file-image me-2"></i>
        صورة الVIP
      </span>,
      classes: 'text-main fs15',
      formatter: (cell, row) => <img loading='lazy' src={row.vipImg} width={35} alt={`Flag of ${row.vipName}`} />,
    },
    {
      dataField: 'time', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-regular fa-clock me-2"></i>
        الوقت
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'edit', //must be same name of property in row which come from api
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


  let dispatch = useDispatch();


  let [currentPage, setCurrentPage] = useState(1);
  const [activeState, setActiveState] = useState(1);


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

      {/* table */}
      {isLoading ? <></> :
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
          bordered={false}
          hover
          classes={`${style.tableHeader} text-center table-borderless my-4 `}
          selectRow={selectRow}
        />
      }






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
    </>
  );
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

              <th className='p-0'><span className=" py-2 badge text-main rounded fs13 border">
                <i className="fa-solid fa-gift me-2"></i>
                إسم الVIP
              </span></th>
              <th className='p-0'><span className=" py-2 badge text-main rounded fs13 border">
                <i className="fa-solid fa-layer-group me-2"></i>
                مستوى الVIP
              </span></th>
              <th className='p-0'><span className=" py-1 badge text-main rounded fs13 border">
                <i className="fa-solid fa-dollar-sign me-1 fs12 rounded-circle border-1 border-dark border p-1 w-25 h-25"></i>
                سعر الVIP
              </span></th>
              <th className='p-0'><span className=" py-2 badge text-main rounded fs13 border">
                <i className="bi bi-file-image me-2"></i>
                صورة الVIP
              </span></th>
              <th className='p-0'><span className=" py-2 badge text-main rounded fs13 border">
                <i className="fa-regular fa-clock me-2"></i>
                الوقت
              </span></th>
              <th className='p-0'><span className=" py-2 badge text-main rounded fs13 border">
                <i className="fa-solid fa-pen me-2"></i>
                التعديل والحذف والطباعة
              </span></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='text-main fs15 px-0'>
                <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                1
              </td>
              <td className='text-main fs15 px-0'>سيارة</td>
              <td className='text-main fs15 px-0'>شراء</td>
              <td className='text-main fs15 px-0'>10000</td>
              <td className='text-main fs15 px-0'><img src={image} alt="صور الهدايا" width={35} loading='lazy' /></td>
              <td className='text-main fs15 px-0'>7 أيام</td>
              <td className='text-main fs15 px-0'>
                <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                <i className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
                <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
              </td>
            </tr>

          </tbody>
        </Table>
      </div> */}