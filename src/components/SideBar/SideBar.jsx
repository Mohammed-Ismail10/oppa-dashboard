import image from '../../Assets/Images/Ellipse 2.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import style from './SideBar.module.css';
import home from '../../Assets/Images/home.png';
import user from '../../Assets/Images/user.png';
import allfiles from '../../Assets/Images/allfiles.png';
import robot from '../../Assets/Images/robot1.png';
import pages from '../../Assets/Images/pages.png';
import notif from '../../Assets/Images/notif.png';
import { useDispatch } from 'react-redux';
import { handleShowLogOut } from '../Redux/ModalsSlice.js';
import ModalLogout from '../ModalLogOut/ModalLogout.jsx';
import { Accordion } from 'react-bootstrap';
import { Button, Drawer } from 'antd';
import { useState } from 'react';




export default function SideBar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };




  const navigate = useNavigate();
  let dispatch = useDispatch();

  const { pathname } = useLocation();


  return (
    <>

      <Button type="primary" onClick={showDrawer} className='d-md-none'>
        Open
      </Button>
      <Drawer onClose={onClose} open={open} className='p-0 d-md-none'>
        {/* <div className={`bottom-0 top-0 shadow d-flex flex-column justify-content-between pt-3 position-fixed ${style.sideBarWidth}`}> */}

        <div className=' d-flex flex-column justify-content-between h-100'>

          <div className='pb-2'>
            <div className='text-center mt-3'>
              <img className='h-50 w-50' src={image} alt="personal img" loading='lazy' />
            </div>
            <div className='d-flex justify-content-around align-items-center pt-2'>
              <span></span>
              <h2 className='mb-0 text-main h4 fw-bold'>{localStorage.getItem('username')}</h2>
              {pathname === '/setting/usersetting' ? <span></span> : <Link to={'/setting/usersetting'} >
                <i className="fa-regular fa-pen-to-square text-main"></i>
              </Link>}
            </div>
          </div>


          <div className='overflow-auto'>
            <ul className='list-unstyled mb-5 pb-5 pe-'>
              <Accordion>

                <div className='py-2 mt-'>
                  <NavLink to={'/'} className="position-relative fs15 nav-link text-main text-decoration-none sideBarActive ps-5 d-flex align-items-center">
                    <img className='me-3' src={home} alt="home" />
                    <span>الرئيسية</span>
                  </NavLink>
                </div>

                <Accordion.Item eventKey="0" className='border-0 py-2'>
                  <Accordion.Header onClick={() => navigate('/users/customers')} >
                    <NavLink to={'/users'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                      <img className='me-3' src={user} alt="user" />
                      <span>إدارة المستخدمين</span>
                    </NavLink>
                  </Accordion.Header>
                  <Accordion.Body className='py-1'>
                    <ul className='list-unstyled ps-5 ms-3'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/users/customers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/users/moderators'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <div className='py-2 mt-'>
                  <NavLink to={'allfolders'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                    <img className='me-3' src={allfiles} alt="allfiles" />
                    <span>جميع الملفات</span>
                  </NavLink>
                </div>

                <Accordion.Item eventKey="1" className='border-0 py-2 bg-warnin'>
                  <Accordion.Header onClick={() => navigate('/app/rechargebalance')} >
                    <NavLink to={'/app'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                      <img className='me-3' src={robot} alt="robot" />
                      <span>إدارة التطبيق</span>
                    </NavLink>
                  </Accordion.Header>
                  <Accordion.Body className='py-1'>
                    <ul className='list-unstyled ps-5 ms-4'>
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

                      <Accordion className='accRoom'>
                        <Accordion.Item eventKey='4' className='border-0'>
                          <Accordion.Header onClick={() => navigate('/app/rooms/backgrounds')}>
                            <NavLink to={'/app/rooms/backgrounds'} className="fs12 nav-link fw-semibold">
                              <span className={`${style.textSub}`}>إدارة الغرف</span>
                            </NavLink>
                          </Accordion.Header>
                          <Accordion.Body className='py-1'>
                            <ul className='list-unstyled ps-1'>
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
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

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
                  </Accordion.Body>
                </Accordion.Item>

                <div className='py-2 mt-'>
                  <NavLink to={'pages'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                    <img className='me-3' src={pages} alt="pages" />
                    <span>الصفحات</span>
                  </NavLink>
                </div>

                <div className='py-2 mt-'>
                  <NavLink to={'notifications'} className="position-relative fs15 nav-link sideBarActive ps-5 text-main text-decoration-none d-flex align-items-center">
                    <img className='me-3' src={notif} alt="notification" />
                    <span>الإشعارات</span>
                  </NavLink>
                </div>

                <Accordion.Item eventKey="2" className='border-0 py-2'>
                  <Accordion.Header onClick={() => navigate('/gift/items')} >
                    <NavLink to={'/gift'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                      <i className="fa-solid fa-paper-plane text-main me-3 fa-fw fs-5"></i>
                      <span>إهداء</span>
                    </NavLink>
                  </Accordion.Header>
                  <Accordion.Body className='py-1'>
                    <ul className='list-unstyled ps-5 ms-4'>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/gift/items'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">السلع</NavLink>
                      </li>
                      <li className={`${style.textSub} py-1`}>
                        <NavLink to={'/gift/vip'} className={`fs12 nav-link text-decoration-none fw-semibold subSideBarActive`}>VIP</NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='border-0 py-2'>
                  <Accordion.Header onClick={() => navigate('/setting/countries')} >
                    <NavLink to={'/setting'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                      <i className="bi bi-gear text-main me-3 fa-fw fs-5"></i>
                      <span>الإعدادات</span>
                    </NavLink>
                  </Accordion.Header>
                  <Accordion.Body className='py-1'>
                    <ul className='list-unstyled ps-5 ms-3'>
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
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </ul>
          </div>


          <div className="mb-4 pb-1">
            <Link onClick={() => dispatch(handleShowLogOut())} className={`text-red fs15 text-decoration-none ${style.logoutHover} d-block py-2 ps-5`}>
              <img className={`${style.logoutImg} me-2 ps-2`} alt="logout" />
              تسجيل الخروج
            </Link>
          </div>
        </div>


        {/* </div> */}
      </Drawer>


      <div className={`h-100 shadow d-flex flex-column justify-content-between pt-3 position-fixed ${style.sideBarWidth} d-none d-md-block overflow-auto`}>

        <div className='pb-2'>
          <div className='text-center mt-3'>
            <img className='h-50 w-50' src={image} alt="personal img" loading='lazy' />
          </div>

          <div className='d-flex justify-content-around align-items-center pt-2'>
            <span></span>
            <h2 className='mb-0 text-main h4 fw-bold'>{localStorage.getItem('username')}</h2>
            {pathname === '/setting/usersetting' ? <span></span> : <Link to={'/setting/usersetting'} >
              <i className="fa-regular fa-pen-to-square text-main"></i>
            </Link>}
          </div>

        </div>


        <div className='overflow-auto mt-5 pt-5'>
          <ul className='list-unstyled mb-5 pb-5'>
            <Accordion>

              <div className='py-2 mt-'>
                <NavLink to={'/'} className="position-relative fs15 nav-link text-main text-decoration-none sideBarActive ps-5 d-flex align-items-center">
                  <img className='me-3' src={home} alt="home" />
                  <span>الرئيسية</span>
                </NavLink>
              </div>

              <Accordion.Item eventKey="0" className='border-0 py-2'>
                <Accordion.Header onClick={() => navigate('/users/customers')} >
                  <NavLink to={'/users'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                    <img className='me-3' src={user} alt="user" />
                    <span>إدارة المستخدمين</span>
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body className='py-1'>
                  <ul className='list-unstyled ps-5 ms-3'>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'/users/customers'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive" >العملاء</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'/users/moderators'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">المشرفين</NavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <div className='py-2 mt-'>
                <NavLink to={'allfolders'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={allfiles} alt="allfiles" />
                  <span>جميع الملفات</span>
                </NavLink>
              </div>

              <Accordion.Item eventKey="1" className='border-0 py-2 bg-warnin'>
                <Accordion.Header onClick={() => navigate('/app/rechargebalance')} >
                  <NavLink to={'/app'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                    <img className='me-3' src={robot} alt="robot" />
                    <span>إدارة التطبيق</span>
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body className='py-1'>
                  <ul className='list-unstyled ps-5 ms-4'>
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

                    <Accordion className='accRoom'>
                      <Accordion.Item eventKey='4' className='border-0'>
                        <Accordion.Header onClick={() => navigate('/app/rooms/backgrounds')}>
                          <NavLink to={'/app/rooms/backgrounds'} className="fs12 nav-link fw-semibold">
                            <span className={`${style.textSub}`}>إدارة الغرف</span>
                          </NavLink>
                        </Accordion.Header>
                        <Accordion.Body className='py-1'>
                          <ul className='list-unstyled ps-1'>
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
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

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
                </Accordion.Body>
              </Accordion.Item>

              <div className='py-2 mt-'>
                <NavLink to={'pages'} className="position-relative fs15 nav-link ps-5 sideBarActive text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={pages} alt="pages" />
                  <span>الصفحات</span>
                </NavLink>
              </div>

              <div className='py-2 mt-'>
                <NavLink to={'notifications'} className="position-relative fs15 nav-link sideBarActive ps-5 text-main text-decoration-none d-flex align-items-center">
                  <img className='me-3' src={notif} alt="notification" />
                  <span>الإشعارات</span>
                </NavLink>
              </div>

              <Accordion.Item eventKey="2" className='border-0 py-2'>
                <Accordion.Header onClick={() => navigate('/gift/items')} >
                  <NavLink to={'/gift'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                    <i className="fa-solid fa-paper-plane text-main me-3 fa-fw fs-5"></i>
                    <span>إهداء</span>
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body className='py-1'>
                  <ul className='list-unstyled ps-5 ms-4'>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'/gift/items'} className="fs12 nav-link text-decoration-none fw-semibold subSideBarActive">السلع</NavLink>
                    </li>
                    <li className={`${style.textSub} py-1`}>
                      <NavLink to={'/gift/vip'} className={`fs12 nav-link text-decoration-none fw-semibold subSideBarActive`}>VIP</NavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className='border-0 py-2'>
                <Accordion.Header onClick={() => navigate('/setting/countries')} >
                  <NavLink to={'/setting'} className="text-decoration-none text-main fw-bold ps-5 nav-link sideBarActive">
                    <i className="bi bi-gear text-main me-3 fa-fw fs-5"></i>
                    <span>الإعدادات</span>
                  </NavLink>
                </Accordion.Header>
                <Accordion.Body className='py-1'>
                  <ul className='list-unstyled ps-5 ms-3'>
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
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </ul>
        </div>


        <div className="mb-4 pb-1 mt-5 pt-5">
          <div onClick={() => dispatch(handleShowLogOut())} className={`text-red fs15 text-decoration-none ${style.logoutHover} d-block py-2 ps-5 curser-pointer`}>
            <img className={`${style.logoutImg} me-2 ps-2`} alt="logout" />
            تسجيل الخروج
          </div>
        </div>
      </div>













      <ModalLogout />
    </>
  )
}