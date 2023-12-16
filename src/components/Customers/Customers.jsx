import React from 'react'
import Container from 'react-bootstrap/Container';
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


// For column checkbox
const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
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
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest} onChange={(e) => console.log(e.target)}/>
      <span className='text-main fs15'>{rest.rowIndex + 1}</span>
    </>
  )
};


const rows = [
  { id: 1, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "نشيط", date: '2023-11-21 T 08:13:16' },
  { id: 2, name: 'يوسف رجب', phone: +201234567890, email: 'yussif.ragab5522@gmail.com', accountState: "غير نشيط", date: '2023-11-21 T 08:13:16' },
];





export default function Customers() {
  const columns = [
    {
      dataField: 'name', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-user me-2"></i>
        الإسم
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'phone', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-telephone-plus me-2"></i>
        رقم الهاتف
      </span>,
      classes: 'text-main fs15',
      formatter: (cell, row) => `+${cell}`,
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'email', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs13 border'>
        <i className="fa-regular fa-envelope-open me-2"></i>
        البريد الإلكتروني
      </span>,
      classes: 'text-main fs15',
    },
    {
      dataField: 'accountState', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="bi bi-exclamation-circle me-2"></i>
        حالة الحساب
      </span>,
      classes: 'text-main fs15',
      formatter: (cell, row) => row.accountState === 'نشيط' ? <span className='badge bg-green py-2 px-4'>نشيط</span> : <span className='badge bg-red py-2 px-3'>غير نشيط</span>
    },
    {
      dataField: 'timeStop', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-regular fa-clock me-2"></i>
        مدة الإيقاف
      </span>,
      classes: 'text-main fs15',
      formatter: () => <span className='badge bg-red py-2 px-4 fs12 fw-bold'>غير محددة</span>
    },
    {
      dataField: 'date', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs13 border'>
        <i className="fa-regular fa-calendar me-2"></i>
        تاريخ التسجيل
      </span>,
      classes: 'text-main fs15',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'edit', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs13 border'>
        <i className="fa-solid fa-pen me-2"></i>
        التعديل والحذف والطباعة
      </span>,
      classes: 'text-main fs15',
      // id => be id in object that come from api
      formatter: (_, { id }) => (<>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowEditRow(id))} className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
      )
    },
  ];


  let { showChangeId, showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();





  return (
    <>
      <section>


        {/* items nav links */}
        <div className='pt-4'>
          <Navbar>
            <Container>
              <Nav className="w-100">
                <NavLink to={''} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  إستعلام المستخدم
                </NavLink>
                <NavLink to={'/جميع الملفات'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  سجل الهدايا
                </NavLink>
                <NavLink onClick={() => dispatch(handleShowChangeId())} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link ${showChangeId ? 'itemsActive' : ''} bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  تغير المعرف (ID)
                </NavLink>
                <NavLink to={'العملاء'} className={`${style.shadowBtn} ${style.itemsHover} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-plus-circle me-2"></i>
                  تحديد شارة (ID)
                </NavLink>
                <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-2 border-0 btn fs12 text-main fw-bold nav-link itemsActive bg-white`}>
                  <i className="bi bi-funnel me-2"></i>
                  فلتر
                </NavLink>
                <div className='d-flex justify-content-start shadow-sm'>
                  <Dropdown dir='ltr'>
                    <Dropdown.Toggle className='bg-body-secondary border-0 h-100 text-main fw-bold fs15 rounded-0' size='sm' id="dropdown-basic">
                      الوكالة
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='mt-0'>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className='position-relative'>
                    <input className={`${style.searchInput} shadow-none h-100 rounded-0 form-control ps-5 pe-0 py-0 bg-body-secondary`} type="search" placeholder='يمكنك البحث هنا' name="" id="" />
                    <i className="fa-solid fa-magnifying-glass position-absolute bottom-0 pb-2 ps-3"></i>
                  </div>
                </div>
                <NavLink onClick={() => dispatch(handleShowDelete())} className={`deleteHover ${style.shadowBtn} rounded-3 ms-auto border-0 btn fs12 text-main fw-bold nav-link ${showDelete ? 'deleteActive' : ''} bg-white`}>
                  مسح الكل
                </NavLink>
              </Nav>
            </Container>
          </Navbar>
        </div>


        {/* table customers */}
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
          bordered={false}
          hover
          classes={`${style.tableHeader} text-center table-borderless my-4 `}
          selectRow={selectRow}
        />



        {/* pagination */}
        <div className='d-flex justify-content-center align-items-center'>
          <div className='mx-2'>
            <span className='text-main fs15'>الصفحة</span>
          </div>
          <div className='mx-2 d-flex align-items-center'>
            <i className="fa-solid fa-caret-right curser-pointer"></i>
            <div className="numPage text-center p-1 fs15 text-white mx-1 rounded-circle bg-main">1</div>
            <i className="fa-solid fa-caret-left curser-pointer"></i>
          </div>
          <div className='mx-2'>
            <Dropdown>
              <Dropdown.Toggle className={`${style.borderDropdown} px-0 border-top-0 border-start-0 border-end-0 border-2 rounded-0 fw-bold fs15`} variant="white" id="dropdown-basic">
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


        {/* modals: first => (تغير المعرف). second => (مسح الكل).  */}
        <ModalChange />
        <ModalDelete />
      </section>
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