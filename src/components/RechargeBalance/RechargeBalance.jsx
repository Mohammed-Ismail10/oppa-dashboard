import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import style from './RechargeBalance.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowAddBalance, handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import coinsImg from '../../Assets/Images/coins.png'
import ModalAddBalance from '../ModalAddBalance/ModalAddBalance.jsx';


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
  { id: 1, mId: 15, charger: 222, type: 'مستخدم عادي', mUser: 322, typeUser: 'مستخدم عادي', coins: 10000.00, created_at: '2023-11-21 T 08:13:16' },
  { id: 2, mId: 15, charger: 222, type: 'مستخدم عادي', mUser: 322, typeUser: 'مستخدم عادي', coins: 10000.00, created_at: '2023-11-21 T 08:13:16' },
];







export default function RechargeBalance() {
  const columns = [
    {
      dataField: 'mId',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف ال (ID)
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'charger',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف الشاحن
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
      // attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'type',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        نوع الشاحن
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'mUser',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        معرف المستخدم
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'typeUser',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        نوع المستخدم
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'coins',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={coinsImg} width={20} alt="" />
        الكوينز
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
    },
    {
      dataField: 'created_at', //must be same name of property in row which come from api
      text: '',
      headerFormatter: () => <span className='w-100 py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-calendar me-2"></i>
        تاريخ الإنشاء
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'edit',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-pen me-2"></i>
        التعديل والحذف والطباعة
      </span>,
      classes: 'text-main fs15 pt-3 pb-0',
      formatter: (_, { id }) => <>
        <i className="fa-regular fa-eye mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
        <i onClick={() => dispatch(handleShowDeleteRow(id))} className="fa-regular fa-trash-can mx-2 bg-danger-subtle text-red p-1 rounded-circle curser-pointer"></i>
        <i className="fa-regular fa-pen-to-square mx-2 bg-dark-subtle p-1 rounded-circle curser-pointer"></i>
      </>
    },
  ];


  let { showAddBalance } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageRechargeBalance');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageRechargeBalance', currentPage);
  }, [currentPage]);



  function getRecharge() {
    return axios.get(``);
  }
  let { data, isLoading, refetch } = useQuery('recharge', getRecharge, {
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
      <div className={`${style.heightItems}`}>

        {/* nav */}
        <div className='pt-5 mt-3 ps-3'>
          <Navbar>
            <Nav className="w-100 pe-2">
              <NavLink onClick={() => dispatch(handleShowAddBalance())} className={`${style.shadowBtn} ${style.addItemHover}  me-3 border-0 btn fs15 text-main fw-bold nav-link ${showAddBalance ? 'addActive' : ''} bg-white`}>
                <i className="bi bi-plus-circle me-2"></i>
                إضافة الرصيد
              </NavLink>
              <NavLink to={'العملاء'} className={`${style.shadowBtn} mx-3 border-0 btn fs15 text-main fw-bold nav-link itemsActive bg-white`}>
                <i className="bi bi-funnel me-2"></i>
                فلتر
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
        <ModalAddBalance />

      </div>
    </>
  )
}
