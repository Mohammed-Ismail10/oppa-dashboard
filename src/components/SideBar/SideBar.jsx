import image from '../../Assets/Images/Ellipse 2.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import style from './SideBar.module.css';
import logoutIcon from '../../Assets/Images/logout.png';
import home from '../../Assets/Images/home.png';
import user from '../../Assets/Images/user.png';
import allfiles from '../../Assets/Images/allfiles.png';
import robot from '../../Assets/Images/robot1.png';
import pages from '../../Assets/Images/pages.png';
import notif from '../../Assets/Images/notif.png';
import { useDispatch, useSelector } from 'react-redux';
import { handleShowLogOut } from '../Redux/ModalsSlice.js';
import ModalLogout from '../ModalLogOut/ModalLogout.jsx';
import { useEffect, useState } from 'react';




export default function SideBar() {

  const navigate = useNavigate();
  let dispatch = useDispatch();






  return (
    <>

      <div className={`bottom-0 top-0 shadow d-flex flex-column justify-content-between pt-3 position-fixed ${style.sideBarWidth}`}>


        <div className='pb-2'>
          <div className='text-center mt-3'>
            <img className='h-50 w-50' src={image} alt="personal img" loading='lazy' />
          </div>
          <div className='d-flex justify-content-around align-items-center pt-2'>
            <span></span>
            <h2 className='mb-0 text-main h4 fw-bold'>{localStorage.getItem('username')}</h2>
            <Link to={'/setting/usersetting'} ><i className="fa-regular fa-pen-to-square text-main"></i></Link>
          </div>
        </div>


        <div className='overflow-auto'>

          <ul className='list-unstyled mb-5 pb-5 pe-5'>
            <div className="accordion accordion-flush mb-5 pb-2" id="accordionFlushExample">


              <div className='py-2 mt-1'>
                <NavLink to={'/'} className="position-relative fs15 nav-link text-main text-decoration-none sideBarActive ps-5 d-flex align-items-center">
                  <img className='me-3' src={home} alt="home" />
                  <span>الرئيسية</span>
                </NavLink>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 mt-1 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/users/customers'} onClick={() => navigate('/users/customers')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <img className='me-3' src={user} alt="user" />
                    <span>إدارة المستخدمين</span>
                  </NavLink>
                </h2>
                <div id="flush-collapseOne" className='ps-5 ms-3 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/users/customers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/users/moderators'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='py-2 mt-1'>
                <NavLink to={'allfolders'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={allfiles} alt="allfiles" />
                  <span>جميع الملفات</span>
                </NavLink>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 mt-1 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/app/rechargebalance'} onClick={() => navigate('/app/rechargebalance')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <img className='me-3' src={robot} alt="robot" />
                    <span>إدارة التطبيق</span>
                  </NavLink>
                </h2>
                <div id="flush-collapseTwo" className='ps-5 ms-3 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/rechargebalance'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">شحن رصيد</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/familylevel'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">مستوى العائلات</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/silvercoins'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">العملات الفضية</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/complaints'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الشكاوى</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/exchangecurrencies'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">تبديل العملات</NavLink>
                      </li>

                      <div className='accordion accordion-flush py-2 pe-0 d-flex' id="accordionFlushExample">
                        <div className='accordion-item'>
                          <h4 className='accordion-header'>
                            <NavLink to={'/app/rooms/backgrounds'} onClick={() => navigate('/app/rooms/backgrounds')} className={`${style.accordionN} ${style.textSub} nav-link fs12 accordion-button collapsed p-0 fw-semibold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                              إدارة الغرف
                            </NavLink>
                          </h4>
                          <div id="flush-collapseSix" className='ps-4 accordion-collapse collapse' data-bs-parent="#accordionFlushExample6">
                            <div className="accordion-body p-0 pt-1">
                              <ul className='list-unstyled '>
                                <li className={`${style.textSub} py-1`}>
                                  <NavLink to={'/app/rooms/backgrounds'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الخلفيات</NavLink>
                                </li>
                                <li className={`${style.textSub} py-1`}>
                                  <NavLink to={'/app/rooms/emoji'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الرموز التعبيرية</NavLink>
                                </li>
                                <li className={`${style.textSub} py-1`}>
                                  <NavLink to={'/app/rooms/rooms'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الغرف</NavLink>
                                </li>
                                <li className={`${style.textSub} py-1`}>
                                  <NavLink to={'/app/rooms/gifts'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الهدايا</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/transfers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التحويلات</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/families'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">العائلات</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/listlevels'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">قائمة المستويات</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/blacklist'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">القائمة السوداء</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/phonecodes'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">اكواد الهواتف</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/app/store'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المتجر</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='py-2 mt-1'>
                <NavLink to={'pages'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={pages} alt="pages" />
                  <span>الصفحات</span>
                </NavLink>
              </div>

              <div className='py-2 mt-1'>
                <NavLink to={'notifications'} className="position-relative fs15 nav-link sideBarActive ps-5 text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={notif} alt="notification" />
                  <span>الإشعارات</span>
                </NavLink>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 mt-1 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/gift/items'} onClick={() => navigate('/gift/items')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <i className="fa-solid fa-paper-plane text-main me-3 fa-fw fs-5"></i> إهداء
                  </NavLink>
                </h2>
                <div id="flush-collapseThree" className='ps-5 ms-3 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}><NavLink to={'/gift/items'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">السلع</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/gift/vip'} className={`fs12 nav-link text-decoration-none fw-semibold subSideBarActive`}>VIP</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 mt-1 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/setting/countries'} onClick={() => navigate('/setting/countries')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <i className="bi bi-gear text-main me-3 fa-fw fs-5"></i> الإعدادات
                  </NavLink>
                </h2>
                <div id="flush-collapseFour" className='ps-5 ms-3 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/setting/countries'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الدول</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/setting/coins'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الكوينز</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/setting/target'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التارجيت</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/setting/roomcategories'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">فئات الغرف</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/setting/usersetting'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">ضبط المستخدم</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </ul>

        </div>


        {/* logout */}
        <div className="mb-4 pb-1">
          <Link onClick={() => dispatch(handleShowLogOut())} className={`text-red fs15 text-decoration-none ${style.logoutHover} d-block py-2 ps-5`}>
            <img className={`${style.logoutImg} me-2 ps-2`} alt="logout" />
            تسجيل الخروج
          </Link>
        </div>


      </div>


      <ModalLogout />
    </>
  )
}

































{/* <li className='py-2'>
              <NavLink to={'/'} className="position-relative fs15 nav-link text-main text-decoration-none sideBarActive ps-5">
                <i className="bi bi-house-door text-main me-1 fa-fw"></i> الرئيسية
              </NavLink>
            </li>

            <li className={`${style.accordionN} accordion-item py-2`} >
              <div className={`${style.accordionN} `}>
              <h2 className="accordion-header">
                <NavLink to={'/customers'} onClick={() => navigate('/customers')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <i className="fa-regular fa-user text-main me-1 fa-fw"></i> إدارة المستخدمين
                </NavLink>
              </h2>
              <div id="flush-collapseOne" className={`${style.accordionN} ps-5 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample1">
                <div className="accordion-body p-0 pt-1">
                  <ul className='list-unstyled ps-4'>
                    <li className={`${style.textSub} py-1`}><NavLink to={'customers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink></li>
                    <li className={`${style.textSub} py-1`}><NavLink to={'moderators'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink></li>
                  </ul>
                </div>
              </div>
              </div>
            </li>

            <li className='py-2'>
              <NavLink to={'allfolders'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none"><i className="fa-regular fa-folder text-main me-1 fa-fw"></i> جميع الملفات</NavLink>
            </li>

            <li className={`${style.accordionN} accordion-item py-2 pe-0`} >
              <div className={`${style.accordionN} `}>
                <h2 className="accordion-header">
                  <NavLink to={'/createagency'} onClick={() => navigate('/createagency')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <i className="fa-regular fa-user text-main me-1 fa-fw"></i> إدارة النقابة
                  </NavLink>
                </h2>
                <div id="flush-collapseTwo" className={`${style.accordionN} ps-5 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'createagency'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">إنشاء وكالة</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'controlagency'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التحكم في الوكالة</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className={`${style.accordionN} accordion-item py-2 pe-0`} >
              <div className={`${style.accordionN} accordion-item`}>
              <h2 className="accordion-header">
                <NavLink to={'/rechargebalance'} onClick={() => navigate('/rechargebalance')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 accordion-button collapsed text-main ps-5 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <i className="fa-solid fa-robot text-main me-1 fa-fw"></i> إدارة التطبيق
                </NavLink>
              </h2>
              <div id="flush-collapseThree" className={`${style.accordionN} ps-5 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample3">
                <div className="accordion-body p-0 pt-1">
                  <ul className='list-unstyled ps-4'>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'rechargebalance'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">شحن رصيد</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'familylevel'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">مستوى العائلات</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'silvercoins'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">العملات الفضية</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'complaints'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الشكاوى</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'exchangecurrencies'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">تبديل العملات</NavLink>
                    </li>
                    <li className={`${style.accordionN} ${style.textSub} accordion accordion-flush py-2 pe-0 d-flex`} id="accordionFlushExample6">
                      <div className={`${style.accordionN} accordion-item`}>
                        <h4 className={`accordion-header ${style.textSub}`}>
                          <NavLink to={'/backgrounds'} onClick={() => navigate('/backgrounds')} className={`${style.accordionN} ${style.textSub} nav-link fs12 accordion-button collapsed p-0 fw-semibold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            إدارة الغرف
                          </NavLink>
                        </h4>
                        <div id="flush-collapseSix" className={`${style.accordionN} ps-4 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample6">
                          <div className="accordion-body p-0 pt-1">
                            <ul className='list-unstyled '>
                              <li className={`${style.textSub} py-1`}>
                                <NavLink to={'backgrounds'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الخلفيات</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </li>

            <li className='py-2'>
              <NavLink to={'pages'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none">
                <i className="bi bi-book text-main me-1 fa-fw"></i> الصفحات
              </NavLink>
            </li>

            <li className='py-2'>
              <NavLink to={'notifications'} className="position-relative fs15 nav-link sideBarActive ps-5 text-main text-decoration-none">
                <i className="fa-regular fa-bell text-main me-1 fa-fw"></i> الإشعارات
              </NavLink>
            </li>

            <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample4">
              <div className={`${style.accordionN} accordion-item`}>
                <h2 className="accordion-header">
                  <NavLink to={'/items'} onClick={() => navigate('/items')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 accordion-button collapsed text-main ps-5 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <i className="fa-solid fa-paper-plane text-main me-1 fa-fw"></i> إهداء
                  </NavLink>
                </h2>
                <div id="flush-collapseFour" className={`${style.accordionN} ps-5 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample4">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}><NavLink to={'items'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">السلع</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'vip'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">VIP</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample5">
              <div className={`${style.accordionN} accordion-item`}>
                <h2 className="accordion-header">
                  <NavLink to={'/countries'} onClick={() => navigate('/countries')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 accordion-button collapsed text-main ps-5 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <i className="bi bi-gear text-main me-1 fa-fw"></i> الإعدادات
                  </NavLink>
                </h2>
                <div id="flush-collapseFive" className={`${style.accordionN} ps-5 accordion-collapse collapse`} data-bs-parent="#accordionFlushExample5">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}><NavLink to={'countries'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الدول</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'coins'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الكوينز</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'target'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التارجيت</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'roomcategories'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">فئات الغرف</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'usersetting'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">ضبط المستخدم</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li> */}