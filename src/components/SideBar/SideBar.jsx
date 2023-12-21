import image from '../../Assets/Images/Ellipse 2.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './SideBar.module.css';
import logoutIcon from '../../Assets/Images/logout.png';





export default function SideBar() {

  const navigate = useNavigate();


  return (
    <>
      <div className="vh-100 shadow d-flex flex-column justify-content-between pt-3">

        <div className='overflow-hidden pb-2'>
          <div>
            <div className='text-center mt-3 overflow-hidden'>
              <img className='h-50 w-50' src={image} alt="personal img" loading='lazy' />
            </div>
            <div className='d-flex justify-content-around align-items-center'>
              <span></span>
              <h2 className='mb-0 text-main h4 fw-bold'>يوسف رجب</h2>
              <Link to={'usersetting'} ><i className="fa-regular fa-pen-to-square text-main"></i></Link>
            </div>
          </div>
        </div>


        <div className={`${style.heightList} pt-4`}>
          <ul className='list-unstyled'>

            <div className="accordion accordion-flush" id="accordionFlushExample">

              <div className='py-2'>
                <NavLink to={'/'} className="position-relative fs15 nav-link text-main text-decoration-none sideBarActive ps-5">
                  <i className="bi bi-house-door text-main me-1 fa-fw"></i> الرئيسية
                </NavLink>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/customers'} onClick={() => navigate('/customers')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="fa-regular fa-user text-main me-1 fa-fw"></i> إدارة المستخدمين
                  </NavLink>
                </h2>
                <div id="flush-collapseOne" className='ps-5 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}><NavLink to={'customers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'moderators'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='py-2'>
                <NavLink to={'allfolders'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none"><i className="fa-regular fa-folder text-main me-1 fa-fw"></i> جميع الملفات</NavLink>
              </div>


              <div className={`${style.accordionN} accordion-item py-2 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/rechargebalance'} onClick={() => navigate('/rechargebalance')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <i className="fa-solid fa-robot text-main me-1 fa-fw"></i> إدارة التطبيق
                  </NavLink>
                </h2>
                <div id="flush-collapseTwo" className='ps-5 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
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
                      <div className='accordion accordion-flush py-2 pe-0 d-flex' id="accordionFlushExample">
                        <div className='accordion-item'>
                          <h4 className='accordion-header'>
                            <NavLink to={'/backgrounds'} onClick={() => navigate('/backgrounds')} className={`${style.accordionN} ${style.textSub} nav-link fs12 accordion-button collapsed p-0 fw-semibold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                              إدارة الغرف
                            </NavLink>
                          </h4>
                          <div id="flush-collapseSix" className='ps-4 accordion-collapse collapse' data-bs-parent="#accordionFlushExample6">
                            <div className="accordion-body p-0 pt-1">
                              <ul className='list-unstyled '>
                                <li className={`${style.textSub} py-1`}>
                                  <NavLink to={'backgrounds'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الخلفيات</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>


              <div className='py-2'>
                <NavLink to={'pages'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none">
                  <i className="bi bi-book text-main me-1 fa-fw"></i> الصفحات
                </NavLink>
              </div>

              <div className='py-2'>
                <NavLink to={'notifications'} className="position-relative fs15 nav-link sideBarActive ps-5 text-main text-decoration-none">
                  <i className="fa-regular fa-bell text-main me-1 fa-fw"></i> الإشعارات
                </NavLink>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/items'} onClick={() => navigate('/items')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <i className="fa-solid fa-paper-plane text-main me-1 fa-fw"></i> إهداء
                  </NavLink>
                </h2>
                <div id="flush-collapseThree" className='ps-5 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body p-0 pt-1">
                    <ul className='list-unstyled ps-4'>
                      <li className={`${style.textSub} py-1`}><NavLink to={'items'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">السلع</NavLink></li>
                      <li className={`${style.textSub} py-1`}><NavLink to={'vip'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">VIP</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`${style.accordionN} accordion-item py-2 pe-0`}>
                <h2 className="accordion-header">
                  <NavLink to={'/countries'} onClick={() => navigate('/countries')} className={`${style.accordionN} position-relative nav-link sideBarActive fs15 ps-5 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <i className="bi bi-gear text-main me-1 fa-fw"></i> الإعدادات
                  </NavLink>
                </h2>
                <div id="flush-collapseFour" className='ps-5 accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
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

            </div>


          </ul>
        </div>


        {/* logout */}
        <div className="text-center mb-4 pb-1">
          <Link to={'login'} className={`text-red fs15 text-decoration-none ${style.logoutHover} w-100 d-block py-2 pe-3`}>
            <img className={`${style.logoutImg} me-2`} alt="logout" />
            تسجيل الخروج
          </Link>
        </div>


      </div>
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