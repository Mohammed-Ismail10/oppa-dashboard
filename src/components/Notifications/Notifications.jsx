import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Notifications.module.css';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import image from '../../Assets/Images/Vector (3).png';

export default function Notifications() {

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <>
      <div className='mt-4 pt-5'>
        <div className="px-5">


          <div className={`${style.alertWidth} alert alert-primary border-0 d-flex align-items-center justify-content-between rounded-4 py-3`}>
            <div className='fs13 text-black'>
              <i className="fa-solid fa-bell text-warning me-2"></i>
              قم بتشغيل الإشعارات لمعرفة ما الجديد والتفاعل معه.
            </div>
            <div>
              <button className='btn rounded-5 fs13 fw-bold text-black border border-1 border-dark-subtle me-4'>
                السماح بالإشعارات
              </button>
              <button className='fs12 fw-bold text-black btn ms-5' >رفض</button>
            </div>
          </div>

          <div className="row">
            <div className="col-9">
              <div className='d-flex justify-content-between align-items-center mb-3 mt-2 pt-1'>
                <h2 className='fw-bold text-black fs30'>إشعارات</h2>
                <Link to={'/setting/countries'}><i class="bi bi-gear text-black"></i></Link>
              </div>
              <Box>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
                      <Tab className={`${value === '1' ? `text-black` : ``} fw-bold fs13 px-0 ${style.fontCairo}`} label="ملخص" value="1" />
                      <Tab className={`${value === '2' ? `text-black` : ``} fw-bold fs13 px-0 ${style.fontCairo}`} label="الوكلاء" value="2" />
                      <Tab className={`${value === '3' ? `text-black` : ``} fw-bold fs13 px-0 ${style.fontCairo}`} label="إدارة المستخدمين" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel className='px-0 py-0' value="1">
                    <div className='border-bottom border-1 py-4'>
                      <div className={`${style.fs14} mb-3 fw-normal text-black`}>
                        <i class={`fa-solid fa-circle ${style.fs5} me-2 text-primary`}></i>
                        تم إضافة وكالة جديدة (وكالة المايسترو)
                      </div>
                      <div className='fs13 text-black ps-2'>
                        <i class={`${style.textOrange} ${style.bgOrange} fa-solid fa-user bg-blue rounded-circle p-2 me-2`}></i>
                        وكالة المايسترو
                      </div>
                    </div>

                    <div className='border-bottom border-1 py-4'>
                      <div className={`${style.fs14} mb-3 fw-normal text-black`}>
                        <i class={`fa-solid fa-circle ${style.fs5} me-2 text-primary`}></i>
                        تم إضافة إطار جديد
                      </div>
                      <div className='fs13 text-black ps-2'>
                        <img className='me-2' src={image} alt="frame" width={27} />
                        إطار السعادة
                      </div>
                    </div>

                    <div className='border-bottom border-1 py-4'>
                      <div className={`${style.fs14} mb-3 fw-normal text-black`}>
                        <i class={`fa-solid fa-circle ${style.fs5} me-2 text-primary`}></i>
                        تم إضافة عائلة جديدة
                      </div>
                      <div className='fs13 text-black ps-2'>
                        <i class={`${style.textOrange} ${style.bgOrange} fa-solid fa-user bg-blue rounded-circle p-2 me-2`}></i>
                        عائلة جرين لاند
                      </div>
                    </div>

                    <div className='border-bottom border-1 py-4'>
                      <div className={`${style.fs14} ${style.colorUpdate} mb-3 fw-normal`}>
                        <i class={`fa-solid fa-circle ${style.fs5} me-2 text-primary`}></i>
                        1 تم عمل تحديث جديد لدى الوكلاء
                      </div>
                      <div className={`${style.fs14} ${style.colorUpdate} fw-normal`}>
                        <i class={`fa-solid fa-circle ${style.fs5} me-2 text-primary`}></i>
                        1 تم عمل تحديث جديد لدى الوكلاء
                      </div>
                    </div>

                  </TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>
            </div>


            <div className="col-3">

            </div>


          </div>


        </div>
      </div>
    </>
  )
}



// showDaysOutsideCurrentMonth
// <DemoItem label={'"day"'}>
// <DateCalendar views={['day']} />
// </DemoItem> 
// <DemoItem label="readOnly">
//<DateCalendar defaultValue={dayjs('2022-04-17')} readOnly />
//</DemoItem>
// 
// 