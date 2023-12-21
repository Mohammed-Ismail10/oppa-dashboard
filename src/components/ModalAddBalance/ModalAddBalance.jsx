import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseAddBalance } from '../Redux/ModalsSlice.js';

export default function ModalAddBalance() {


  let { showAddBalance } = useSelector(({ modals }) => modals);
  let dispatch = useDispatch();

  function handleCloseAddBalanceBig() {
    dispatch(handleCloseAddBalance());
  }





  return (
    <>
      <Modal centered animation={false} show={showAddBalance} onHide={handleCloseAddBalanceBig}>
        <Modal.Body>
        
          <div>
            <form>
              <div className="row">
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="normalId">ال(ID) العادي</label>
                  <input className="form-control py-1" type="number" id='normalId' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="supId">ال(ID) الداعم</label>
                  <input className="form-control py-1" type="number" id='supId' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="phone">رقم الهاتف</label>
                  <input className="form-control py-1" type="tel" id='phone' />
                </div>
                <div className="col-6 py-1">
                  <label className='fs15 pb-2' htmlFor="country">الدولة</label>
                  <input className="form-control py-1" type="text" id='country' />
                </div>
                

                <div className="col-12 py-1 mt-5">
                  <button type='submit' className='btn bg-blue text-white w-100 fs-5 fw-bold py-1'>
                    <i className="bi bi-check2-circle me-2"></i>
                    حفظ التغييرات
                  </button>
                </div>

              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
