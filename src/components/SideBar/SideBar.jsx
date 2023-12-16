import image from '../../Assets/Images/Ellipse 2.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './SideBar.module.css';
import logoutIcon from '../../Assets/Images/logout.png';





export default function SideBar() {

  const navigate = useNavigate();


  return (
    <>
      <div className="h-100 shadow pb-0 mb-0">

        <div className='overflow-hidden pb-2'>
          <div className='mx-auto mt-3 ratio ratio-1x1 rounded-circle overflow-hidden h-50 w-50'>
            <img src={image} alt="personal img" loading='lazy' width={100} />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <h2 className='ms-3 text-main h4 fw-bold text-center w-100'>يوسف رجب</h2>
            <Link to={'ضبط المستخدم'} className='ms-auto me-3'><i className="fa-regular fa-pen-to-square text-main"></i></Link>
          </div>
        </div>

        <div>
          <div>
            <ul className='list-unstyled'>

              <li className='py-2'>
                <NavLink to={'/'} className="fs15 nav-link ps-4 text-main text-decoration-none sideBarActive">
                  <i className="bi bi-house-door text-main me-1 fa-fw"></i> الرئيسية
                </NavLink>
              </li>

              <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample1">
                <div className={`${style.accordionN} accordion-item`}>
                  <h2 className="accordion-header">
                    <button onClick={() => navigate('العملاء')} className={`${style.accordionN} fs15 px-4 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <i className="fa-regular fa-user text-main me-1 fa-fw"></i> إدارة المستخدمين
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className={`${style.accordionN} accordion-collapse collapse`} data-bs-parent="#accordionFlushExample1">
                    <div className="accordion-body p-0 pt-1">
                      <ul className='list-unstyled ps-4'>
                        <li className={`${style.textSub} py-1`}><NavLink to={'العملاء'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink></li>
                        <li className={`${style.textSub} py-1`}><NavLink to={'المشرفين'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className='py-2'>
                <NavLink to={'allfolders'} className="fs15 nav-link ps-4 sideBarActive text-main text-decoration-none"><i className="fa-regular fa-folder text-main me-1 fa-fw"></i> جميع الملفات</NavLink>
              </li>

              <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample2">
                <div className={`${style.accordionN} accordion-item`}>
                  <h2 className="accordion-header">
                    <button onClick={() => navigate('إنشاء وكالة')} className={`${style.accordionN} fs15 px-4 accordion-button collapsed text-main p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <i className="fa-regular fa-user text-main me-1 fa-fw"></i> إدارة النقابة
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className={`${style.accordionN} accordion-collapse collapse`} data-bs-parent="#accordionFlushExample2">
                    <div className="accordion-body p-0 pt-1">
                      <ul className='list-unstyled ps-4'>
                        <li className={`${style.textSub} py-1`}>
                          <NavLink to={'إنشاء وكالة'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">إنشاء وكالة</NavLink>
                        </li>
                        <li className={`${style.textSub} py-1`}>
                          <NavLink to={'التحكم في الوكالة'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التحكم في الوكالة</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample3">
                <div className={`${style.accordionN} accordion-item`}>
                  <h2 className="accordion-header">
                    <button className={`${style.accordionN} fs15 accordion-button collapsed text-main px-4 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <i className="fa-solid fa-robot text-main me-1 fa-fw"></i> إدارة التطبيق
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className={`${style.accordionN} accordion-collapse collapse`} data-bs-parent="#accordionFlushExample3">
                    <div className="accordion-body p-0 pt-1">
                      <ul className='list-unstyled ps-4'>
                        {/* <li><Link className={`fs12 text-decoration-none fw-semibold text-main`}>إنشاء وكالة</Link></li>
                        <li><Link className={`fs12 text-decoration-none fw-semibold text-main`}>التحكم في الوكالة</Link></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className='py-2'>
                <NavLink to={'الصفحات'} className="fs15 nav-link px-4 sideBarActive text-main text-decoration-none">
                  <i className="bi bi-book text-main me-1 fa-fw"></i> الصفحات
                </NavLink>
              </li>
              <li className='py-2'>
                <NavLink to={'الإشعارات'} className="fs15 nav-link sideBarActive px-4 text-main text-decoration-none">
                  <i className="fa-regular fa-bell text-main me-1 fa-fw"></i> الإشعارات
                </NavLink>
              </li>

              <li className={`${style.accordionN} accordion accordion-flush py-2 pe-0`} id="accordionFlushExample4">
                <div className={`${style.accordionN} accordion-item`}>
                  <h2 className="accordion-header">
                    <button onClick={() => navigate('items')} className={`${style.accordionN} fs15 accordion-button collapsed text-main px-4 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      <i className="fa-solid fa-paper-plane text-main me-1 fa-fw"></i> إهداء
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className={`${style.accordionN} accordion-collapse collapse`} data-bs-parent="#accordionFlushExample4">
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
                    <button onClick={() => navigate('الدول')} className={`${style.accordionN} fs15 accordion-button collapsed text-main px-4 p-0 fw-bold`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      <i className="bi bi-gear text-main me-1 fa-fw"></i> الإعدادات
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className={`${style.accordionN} accordion-collapse collapse`} data-bs-parent="#accordionFlushExample5">
                    <div className="accordion-body p-0 pt-1">
                      <ul className='list-unstyled ps-4'>
                        <li className={`${style.textSub} py-1`}><NavLink to={'الدول'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الدول</NavLink></li>
                        <li className={`${style.textSub} py-1`}><NavLink to={'الكوينز'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">الكوينز</NavLink></li>
                        <li className={`${style.textSub} py-1`}><NavLink to={'التارجيت'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">التارجيت</NavLink></li>
                        <li className={`${style.textSub} py-1`}><NavLink to={'فئات الغرف'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">فئات الغرف</NavLink></li>
                        <li className={`${style.textSub} py-1`}><NavLink to={'ضبط المستخدم'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">ضبط المستخدم</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          {/* logout */}
          <div className="text-center mt-5">
            <Link to={'login'} className={`text-red fs15 text-decoration-none ${style.logoutHover} w-100 d-block py-2`}>
              <img className='me-2' src={logoutIcon} alt="logout" />
              تسجيل الخروج
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
