import React from 'react'
import { Modal } from 'react-bootstrap'
import image from '../../Assets/Images/Ellipse 2.png';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseUserQuery } from '../Redux/ModalsSlice.js';
import style from './ModalUserQuery.module.css';
import closeBtn from '../../Assets/Images/closeBtn.png';



export default function ModalUserQuery() {


  let { showUserQuery } = useSelector(({ modals }) => modals);


  let dispatch = useDispatch();


  function handleCloseUserQueryBig() {
    dispatch(handleCloseUserQuery());
  }


  return (
    <>
      <Modal className='custom-modal-change' centered animation={false} show={showUserQuery} onHide={handleCloseUserQueryBig}>
        <Modal.Body className='position-relative '>

          <img onClick={() => handleCloseUserQueryBig()} className='position-absolute end-0 me-3 curser-pointer' src={closeBtn} alt="closeBtn" />

          <div className={`${style.widthImg} text-center mx-auto ratio ratio-1x1 rounded-circle overflow-hidden mb-5`}>
            <img src={image} alt="personal img" loading='lazy' width={100} />
          </div>

          <form>
            <div className="row px-5 pb-4">
              <div className="col-12 py-2">
                <label className='fs15 pb-2' htmlFor="normalId">بالبحث بال(ID)</label>
                <input className="form-control py-2 fs15 fw-bold" type="number" id='normalId' />
              </div>
            </div>


            <div className="col-12 py-1 mt-5 px-2">
              <button type='submit' className='btn bg-blue text-white w-100 fs-5 fw-bold'>
                <i className="fa-solid fa-magnifying-glass me-3 fs-4"></i>
                بحث
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
