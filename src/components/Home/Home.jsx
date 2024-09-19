import React from 'react'
import style from './Home.module.css';
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;




export default function Home() {



  const options1 = {
    height: 250,
    animationEnabled: true,
    theme: "light2",
    axisY: {
      labelFontColor: "black",
      labelFontSize: 9,
    },
    axisX: {
      title: "ـ",
      titleFontSize: 50,
      labelFontColor: "black",
      labelFontSize: 9,
    },
    data: [{
      type: "line",
      // toolTipContent: " عدد المستخدمين {y} : عدد الأيام {x}",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 40, y: 20 },
        { x: 60, y: 40 },
        { x: 140, y: 64 },
        { x: 210, y: 62 },
        { x: 280, y: 64 },
        { x: 350, y: 30 },
        { x: 460, y: 60 },
      ]
    }],
  }
  const options2 = {
    height: 250,
    animationEnabled: true,
    theme: "light2",
    axisY: {
      labelFontColor: "black",
      labelFontSize: 9,
    },
    axisX: {
      title: "ـ",
      titleFontSize: 50,
      labelFontColor: "black",
      labelFontSize: 9,
    },
    data: [{
      type: "line",
      // toolTipContent: " عدد الغرف {y} : عدد الأيام {x}",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 40, y: 20 },
        { x: 60, y: 40 },
        { x: 140, y: 64 },
        { x: 210, y: 62 },
        { x: 280, y: 64 },
        { x: 350, y: 30 },
        { x: 460, y: 60 },
      ]
    }],
  }
  const options3 = {
    height: 250,
    animationEnabled: true,
    theme: "light2",
    axisY: {
      labelFontColor: "black",
      labelFontSize: 9,
    },
    axisX: {
      title: "ـ",
      titleFontSize: 50,
      labelFontColor: "black",
      labelFontSize: 9,
    },
    data: [{
      type: "line",
      toolTipContent: " عدد الكوينز {y} : عدد الأيام {x}",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 40, y: 20 },
        { x: 60, y: 40 },
        { x: 140, y: 64 },
        { x: 210, y: 62 },
        { x: 280, y: 64 },
        { x: 350, y: 30 },
        { x: 460, y: 60 },
      ]
    }],
  }
  const options4 = {
    height: 250,
    animationEnabled: true,
    theme: "light2",
    axisY: {
      labelFontColor: "black",
      labelFontSize: 9,
    },
    axisX: {
      title: "ـ",
      titleFontSize: 50,
      labelFontColor: "black",
      labelFontSize: 9,
    },
    data: [{
      type: "line",
      toolTipContent: " VIP {y} : عدد الأيام {x}",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 40, y: 20 },
        { x: 60, y: 40 },
        { x: 140, y: 64 },
        { x: 210, y: 62 },
        { x: 280, y: 64 },
        { x: 350, y: 30 },
        { x: 460, y: 60 },
      ]
    }],
  }











  return (
    <>
      <div className='container px-5 px-xxl-3 py-5'>
        {/* search input */}
        <div className={`position-relative mt-5  w-50`}>
          <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
          <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-0 bg-search border-0 ps-5`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
        </div>

        {/* charts */}
        <div className='row mt-5 pt-4'>

          <div className="col-12 col-xl-6 my-4">
            <div className={`${style.heightChart} overflow-hidden rounded-3 shadow mx-1 position-relative px-4`}>
              <div className='d-flex justify-content-between px-0 pt-2'>
                <span className='fs15 fw-medium title-chart'>المستخدمين</span>
                <span className='fs9 fw-bold text-black'>المستخدمين</span>
              </div>
              <CanvasJSChart options={options1} />
              <div className={`${style.titleX} position-absolute fs9 fw-bold text-black`}>الأيام</div>
            </div>
          </div>

          <div className="col-12 col-xl-6 my-4 ">
            <div className={`${style.heightChart} overflow-hidden rounded-3 shadow mx-1 position-relative px-4`}>
              <div className='d-flex justify-content-between px-0 pt-2'>
                <span className='fs15 fw-medium title-chart'>الغرف</span>
                <span className='fs9 fw-bold text-black'>الغرف</span>
              </div>
              <CanvasJSChart options={options2} />
              <div className={`${style.titleX} position-absolute fs9 fw-bold text-black`}>الأيام</div>
            </div>
          </div>

          <div className="col-12 col-xl-6 my-4" >
            <div className={`${style.heightChart} overflow-hidden rounded-3 shadow mx-1 position-relative px-4`}>
              <div className='d-flex justify-content-between px-0 pt-2'>
                <span className='fs15 fw-medium title-chart'>الكوينز</span>
                <span className='fs9 fw-bold text-black'>الكوينز</span>
              </div>
              <CanvasJSChart options={options3} />
              <div className={`${style.titleX} position-absolute fs9 fw-bold text-black`}>الأيام</div>
            </div>
          </div>


          <div className="col-12 col-xl-6 my-4">
            <div className={`${style.heightChart} overflow-hidden rounded-3 shadow mx-1 position-relative px-4`}>
              <div className='d-flex justify-content-between px-0 pt-2'>
                <span className='fs15 fw-medium title-chart'>الــ VIP الـمبـاع</span>
                <span className='fs9 fw-bold text-black'>VIP</span>
              </div>
              <CanvasJSChart options={options4} />
              <div className={`${style.titleX} position-absolute fs9 fw-bold text-black`}>الأيام</div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
