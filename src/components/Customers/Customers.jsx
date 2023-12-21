import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ModalChange from '../ModalChange/ModalChange.jsx';
import style from './Customers.module.css';
import { DropdownMenu } from 'react-bootstrap';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowChangeId, handleShowDelete, handleShowDeleteRow, handleShowEditRow } from '../Redux/ModalsSlice.js';
import BootstrapTable from 'react-bootstrap-table-next';
import { Url, baseUrl } from '../../helpers/constant.js';
import { useQuery } from 'react-query';
import axios from 'axios';


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


// const rows = [
//   { id: 1, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "نشيط", date: '2023-11-21 T 08:13:16' },
//   { id: 2, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "غير نشيط", date: '2023-11-21 T 08:13:16' },
// ];





export default function Customers() {
  const columns = [
    {
      dataField: 'name', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'phone', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
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
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-envelope-open me-2"></i>
        البريد الإلكتروني
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'active', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الحساب
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: (_, { id }) => data?.data?.data.map((customer) => {
        if (id == customer.id) {
          if (customer.active == 1) {
            return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-green`}>نشيط</span>
          }
          else {
            return <span key={id} className={`badge py-2 fs15 px-4 curser-pointer bg-red`}>غير نشيط</span>
          }
        }
      })
    },
    {
      dataField: 'timeStop', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-clock me-2"></i>
        مدة الإيقاف
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      formatter: () => <span className='badge bg-red py-2 px-4 fs15 fw-bold'>غير محددة</span>
    },
    {
      dataField: 'created_at', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-calendar me-2"></i>
        تاريخ التسجيل
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
        <i onClick={() => dispatch(handleShowEditRow(id))} className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];



  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageCustomers');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageCustomers', currentPage);
  }, [currentPage]);



  function getCustomers() {
    return axios.get(`${Url}/users/dashboard?limit=9&page=${currentPage}`);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('customer', getCustomers, {
    cacheTime: 60000,
    refetchInterval: 300000,
  });
  // console.log(data?.data)

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


        {/* customers nav links */}
        <div className='pt-5 mt-3'>
          <Navbar>
            <Nav className="w-100 pe-2">
              <NavLink to={''} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
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
              <NavLink to={'العملاء'} className={`${style.shadowBtn} ${style.itemsHover} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                تحديد شارة (ID)
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
              </NavLink>
              <div className={`d-flex justify-content-start shadow-s mx-3 ${style.searchWidth} ${style.shadowSearch}`}>
                <Dropdown dir='ltr'>
                  <Dropdown.Toggle className='bg-search border-0 h-100 text-main fw-bold fs15 rounded-0 ps-5 pe-4' size='sm' id="dropdown-basic">
                    الوكالة
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='mt-0'>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className='position-relative w-100'>
                  <input className={`${style.searchInput}  shadow-none h-100 rounded-0 form-control ps-5 pe-0 py-0 bg-search border-0 border-start`} type="search" placeholder='يمكنك البحث هنا' name="" id="" />
                  <i className="fa-solid fa-magnifying-glass position-absolute bottom-0 pb-2 ps-3"></i>
                </div>
              </div>
              <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} me-4 px-3 rounded-3 ms-auto border-0 btn fs15 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                مسح الكل
              </NavLink>
            </Nav>
          </Navbar>
        </div>


        {isLoading ? <></> :
          <div className='d-flex flex-column h-100 justify-content-between'>
            {/* table customers */}
            < BootstrapTable
              keyField="id"
              data={data?.data.data}
              columns={columns}
              bordered={false}
              classes={`${style.tableHeader} text-center table-borderless my-4 ${style.tableWidth}`}
              selectRow={selectRow}
              rowClasses={`${style.rowShadow} `}
            />
            {/* pagination */}
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mx-2'>
                <span className='text-main fs15'>الصفحة</span>
              </div>
              <div className='mx-2 d-flex align-items-center'>
                <i onClick={() => increase()} className="fa-solid fa-caret-right curser-pointer"></i>
                <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">{currentPage}</div>
                <i onClick={() => decrease()} className="fa-solid fa-caret-left curser-pointer"></i>
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
          </div>}

        {/* modals: first => (تغير المعرف). second => (مسح الكل).  */}
        <ModalChange />
        <ModalDelete />
      </div>
    </>
  )
}




































{/* <div className='pt-4 pb-3'>
          <Table hover className='text-center table-borderless'>
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
                  <i className="fa-solid fa-user me-2"></i>
                  الإسم
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="bi bi-telephone-plus me-2"></i>
                  رقم الهاتف
                </span></th>
                <th className='p-0 '><span className="w-100 py-2 badge text-main rounded fs13 border">
                  <i className="fa-regular fa-envelope-open me-2"></i>
                  البريد الإلكتروني
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  حالة الحساب
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-regular fa-clock me-2"></i>
                  مدة الإيقاف
                </span></th>
                <th className='p-0 '><span className="w-100 py-2 badge text-main rounded fs13 border">
                  <i className="fa-regular fa-calendar me-2"></i>
                  تاريخ التسجيل
                </span></th>
                <th className='p-0 '><span className=" py-2 badge text-main rounded fs13 border">
                  <i className="fa-solid fa-pen me-2"></i>
                  التعديل والحذف والطباعة
                </span></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='text-main fs15'>
                  <input className='form-check-input me-3 shadow-none border-1 border-dark-subtle' type="checkbox" />
                  1
                </td>
                <td className='text-main fs15'>يوسف رجب</td>
                <td className='text-main fs15'>201234567890+</td>
                <td className='text-main fs15'>yussif.ragab5522@gmail.com</td>
                <td className='text-main fs15'><span className='badge bg-green py-2 px-4 fs12 fw-bold'>نشيط</span></td>
                <td className='text-main fs15'><span className='badge bg-red py-2 px-4 fs12 fw-bold'>غير محددة</span></td>
                <td dir='ltr' className='text-main fs15'>2023-11-21 T 08:13:16</td>
                <td className='text-main fs15'>
                  <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
                  <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
                </td>

              </tr>
            </tbody>
          </Table>
        </div> */}