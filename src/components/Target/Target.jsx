import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import style from './Target.module.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ModalDelete from '../ModalDelete/ModalDelete.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowDelete, handleShowDeleteRow } from '../Redux/ModalsSlice.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import dollarImg from '../../Assets/Images/dolar.png'
import targetImg from '../../Assets/Images/target.png'
import presentImg from '../../Assets/Images/presentage.png'


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
      <input className='form-check-input shadow-none border-1 border-dark-subtle me-3' type={mode} {...rest} onChange={(e) => console.log(e.target)} />
      {rest.rowIndex + 1}
    </>
  )
};


const rows = [
  { id: 1, target: 10, agencyName: 'وكالة المايسترو', diamond: 50, dollar: "40 $", time: '50 H', days: '5 أيام', agencyPrecentage: 13.3333333333 },
  { id: 2, target: 10, agencyName: 'وكالة المايسترو', diamond: 50, dollar: "40 $", time: '50 H', days: '5 أيام', agencyPrecentage: 13.3333333333 },
];



export default function Target() {
  const columns = [
    {
      dataField: 'target',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={targetImg} width={16} alt="" />
        التارجيت
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'agencyName',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-solid fa-user me-2"></i>
        إسم الوكالة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'diamond',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="bi bi-gem me-2"></i>
        الماس
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'dollar',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={dollarImg} alt="" />
        دولار
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'time',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-clock me-2"></i>
        الوقت
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
      attrs: () => ({ 'dir': `ltr` }),
    },
    {
      dataField: 'days',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <i className="fa-regular fa-calendar me-2"></i>
        الأيام
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'agencyPrecentage',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
        <img className='me-2' src={presentImg} alt="" />
        نسبة الوكالة
      </span>,
      classes: 'text-main fs15 pt-3 px-0',
    },
    {
      dataField: 'edit',
      text: '',
      headerFormatter: () => <span className='py-2 badge text-main rounded fs15 border'>
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


  let { showDelete } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();



  let [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPageTarget');
    return storedPage ? parseInt(storedPage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('currentPageTarget', currentPage);
  }, [currentPage]);



  function getTarget() {
    return axios.get(``);
  }
  let { data, isLoading, refetch, isError, isFetching } = useQuery('target', getTarget, {
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
            {/* Table */}
            <BootstrapTable
              keyField="id"
              data={rows}
              columns={columns}
              bordered={false}
              classes={`${style.tableHeader} ${style.tableWidth} text-center table-borderless my-4 `}
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


      </div>
    </>
  )
}
