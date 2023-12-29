import React from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseLogOut } from '../Redux/ModalsSlice.js';
import { useNavigate } from 'react-router-dom';
import style from './ModalLogOut.module.css';


export default function ModalLogout() {

  let { showLogOut } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  function handleCloseLogOutBig() {
    dispatch(handleCloseLogOut());
  }

  let navigate = useNavigate();




  return (
    <>
      <Modal size='lg' centered animation={false} show={showLogOut} onHide={handleCloseLogOutBig}>
        <Modal.Body className='p-5'>
          <div dir='ltr'>
            <i onClick={handleCloseLogOutBig} className="fa-solid fa-xmark fs-4 curser-pointer"></i>
          </div>
          <div className='fs30 text-center pb-5 fw-bolder text-black'>
            هل أنت متأكد من أنك تريد تسجيل الخروج
          </div>
          <div className='row justify-content-between mt-5'>
            <div className="col-5">
              <button onClick={() => {
                handleCloseLogOutBig();
                navigate('/login');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('username');
              }} className={`${style.shadowBtn} ${style.sureHover} text-black py-2 fs30 fw-bolder p-0 btn w-100`}>تأكيد</button>
            </div>
            <div className="col-5">
              <button onClick={handleCloseLogOutBig} className={`${style.shadowBtn} ${style.backHover} text-black py-2 fs30 fw-bolder p-0 btn w-100`}>تراجع</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
