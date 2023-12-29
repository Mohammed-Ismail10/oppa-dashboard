import axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseDelete, handleCloseDeleteRow } from '../Redux/ModalsSlice.js';
import style from './ModalDelete.module.css';

export default function ModalDelete() {

  let { showDelete, showDeleteRow, rowId } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  function handleCloseDeleteBig() {
    dispatch(handleCloseDelete());
  }
  function handleCloseDeleteRowBig() {
    dispatch(handleCloseDeleteRow());
  }


  async function deleteRow(rowId) {
    let { data } = await axios.delete(``);
  }
  async function deleteAll() {
    let { data } = await axios.delete(``);
  }




  return (
    <>
      <Modal size='lg' centered animation={false} show={showDelete} onHide={handleCloseDeleteBig}>
        <Modal.Body className='p-5'>

          <div className='fs30 text-center pb-5 fw-bolder text-black'>
            هل أنت متأكد من أنك تريد المسح
          </div>
          <div className='row justify-content-between mt-5'>
            <div className="col-5">
              <button onClick={() => { handleCloseDeleteBig(); deleteAll() }} className={`${style.shadowBtn} ${style.sureHover} text-black py-2 fs30 fw-bolder p-0 btn w-100`}>تأكيد</button>
            </div>
            <div className="col-5">
              <button onClick={handleCloseDeleteBig} className={`${style.shadowBtn} ${style.backHover} text-black py-2 fs30 fw-bolder p-0 btn w-100`}>تراجع</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>


      {/* Modal for delete one row */}

      <Modal size='lg' centered animation={false} show={showDeleteRow} onHide={handleCloseDeleteRowBig}>
        <Modal.Body className='p-5'>


          <div className='fs30 text-center pb-5 fw-bolder text-black'>
            هل أنت متأكد من أنك تريد المسح
          </div>
          <div className='row justify-content-between mt-5'>
            <div className="col-5">
              <button onClick={() => { handleCloseDeleteRowBig(); deleteRow(rowId)}} className={`${style.shadowBtn} ${style.sureHover} fs30 fw-bold p-0 btn w-100`}>تأكيد</button>
            </div>
            <div className="col-5">
              <button onClick={handleCloseDeleteRowBig} className={`${style.shadowBtn} ${style.backHover} fs30 fw-bold p-0 btn w-100`}>تراجع</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
