import React from 'react'
import style from './UserSetting.module.css';

export default function UserSetting() {




  return (
    <>
      <section className='py-4'>
        <form className='w-75 mx-auto'>
          {/* upload image */}
          <div className='d-flex justify-content-start'>
            <div className='text-center d-flex flex-column align-items-center'>
              <span className='fs15 pb-2'>صورة ملفك الشخصي</span>
              <label className={`${style.imgPick} p-2 curser-pointer d-inline`} htmlFor="addImage">
                <i class="fa-regular fa-image fs-3 pt-1"></i>
                <span className='text-main fs15 pt-1 d-block'>رفع صورتك</span>
                <input className="d-none" name='image' type="file" accept='image/*' id="addImage" />
              </label>
            </div>
          </div>

          <hr className='w-100 mx-auto mt-4' />

          {/* the rest of form */}
          <div className="row">
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="fullName">الإسم كامل</label>
              <input className={`${style.holder} form-control`} name='fullName' type="text" id='fullName' placeholder='من فضلك ادخل اسمك الكامل' />
            </div>
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="userName">اسم المستخدم</label>
              <input className={`${style.holder} form-control`} name='userName' type="text" id='userName' placeholder='الرجاء إدخال اسم المستخدم' />
            </div>
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="password">الرقم السري</label>
              <input className={`${style.holder} form-control`} name='password' type="password" id='password' placeholder='***************' />
            </div>
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="rePassword">تأكيد الرقم السري</label>
              <input className={`${style.holder} form-control`} name='rePassword' type="password" id='rePassword' placeholder='***************' />
            </div>
            <div className="col-6 py-2">
              <label className='fs15 mb-2' htmlFor="phone">رقم الهاتف</label>
              <input className={`${style.holder} form-control`} name='phone' type="tel" id='phone' placeholder='يرجى إدخال رقم الهاتف الخاص بك' />
            </div>

            <div dir='ltr' className="col-12 py-4">
              <button className='btn bg-danger text-white px-4 fs15 fw-bold' type="submit">تحديث الملف</button>
              <button className='btn bg-white text-main me-2 fs15 fw-bold' type="reset">إعادة ضبط</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
