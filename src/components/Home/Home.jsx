import React, { useEffect, useState } from 'react'
import style from './Home.module.css';
import Plot from 'react-plotly.js';
import CanvasJSReact from '@canvasjs/react-charts';
import { Chart } from "react-google-charts";
import { CartesianGrid, Line, Tooltip, LineChart, XAxis, YAxis, Legend, Label } from 'recharts';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;




export default function Home() {

  const options1 = {
    animationEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "المستخدمين",
      fontSize: 30,
      fontColor: "#9A9A9A",
      fontWeight: "bold",
      horizontalAlign: "right",
    },
    axisY: {
      title: "المستخدمين",
      titleFontColor: "black",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontColor: "black",
      labelFontSize: 14,
    },
    axisX: {
      title: "الأيام",
      titleFontColor: "black",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontColor: "black",
      labelFontSize: 14,
      interval: 40
    },
    data: [{
      type: "line",
      toolTipContent: "مستخدمين {y} : {x} ايام",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 10, y: 20 },
        { x: 70, y: 40 },
        { x: 140, y: 64 },
        { x: 210, y: 62 },
        { x: 370, y: 64 },
        { x: 350, y: 30 },
        { x: 460, y: 60 },
      ]
    }],
    height: 300
  }
  const options2 = {
    animationEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "الغرف",
      fontSize: 30,
      fontColor: "#9A9A9A",
      fontWeight: "bold",
      horizontalAlign: "right",
    },
    axisY: {
      title: "الغرف",
      titleFontColor: "black",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontColor: "black",
      labelFontSize: 14,
    },
    axisX: {
      title: "الأيام",
      titleFontColor: "black",
      titleFontSize: 20,
      titleFontWeight: "bold",
      labelFontColor: "black",
      labelFontSize: 14,
      interval: 40
    },
    data: [{
      type: "line",
      toolTipContent: " غرف {y}:{x} ايام",
      dataPoints: [
        { x: 0, y: 0 },
        { x: 30, y: 100 },
        { x: 60, y: 200 },
        { x: 90, y: 300 },
        { x: 120, y: 450 },
        { x: 140, y: 600 },
        { x: 180, y: 1000 },
        { x: 460, y: 1500 },
      ]
    }],
    height: 300
  }


  const data = [
    { name: '2017', react: 0 },
    { name: '2018', react: 3000 },
    { name: '2019', react: 2000 },
    { name: '2020', react: 2780 },
    { name: '2021', react: 1890 },
    { name: '2022', react: 2390 },
    { name: '2023', react: 3490 },
  ];









  return (
    <>
      <div className='container-xxl container-fluid'>

        <div className={`position-relative pt-5 mt-3 mb-4 ps-4 w-50`}>
          <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
          <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-0 bg-search border-0 ps-5`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
        </div>


        <div className={`row `}>
          <div className="col-12 col-xl-6 my-4 pe-4 ps-4 ps-xxl-5">
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options1} />
            </div>
          </div>
          <div className="col-12 col-xl-6 my-4  pe-4 ps-4 ps-xxl-5">
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options2} />
            </div>
          </div>

          <div className="col-12 col-xl-6 my-4 pe-4 ps-4 ps-xxl-5" >
            <div className={`${style.roundedChart} pt-3 position-relative `}>

              <div className={`${style.headerChart} mb-2 w-100 d-flex justify-content-between`}>
                <span className='fs15 fw-medium title-chart'>الــ VIP المباع</span>
                <span className='fw-bold fs9'>VIP</span>
              </div>

              <LineChart className='bg-dange w-100' width={570} height={250} data={data} margin={{ right: 45 }}>
                <Line type={'monotone'} dataKey={'react'} stroke='blue' strokeWidth={2} />
                <CartesianGrid />
                <XAxis dataKey="name" tick={{ fontSize: 9, fontWeight: 400 }}>
                  <Label value="الأيام" position="insideBottomRight" dx={25} dy={-13} fill='black' fontSize={9} fontWeight={700} />
                </XAxis>
                <YAxis tick={{ dx: -30, fontSize: 9, fontWeight: 400 }} />
              </LineChart>
            </div>
          </div>

          <div className="col-12 col-xl-6 my-4 pe-4 ps-4 ps-xxl-5">
            <div className={`${style.roundedChart} bg-warnin pt-3`}>

              <div className={`${style.headerChart} mb-2 w-100 d-flex justify-content-between`}>
                <span className='fs15 fw-medium title-chart'>الــ VIP المباع</span>
                <span className='fw-bold fs9'>VIP</span>
              </div>

              <LineChart className='bg-succes w-100 ' width={570} height={250} data={data} margin={{ right: 45 }}>
                <Line type={'monotone'} dataKey={'react'} stroke='blue' strokeWidth={2} />
                <CartesianGrid />
                <XAxis dataKey="name" tick={{ fontSize: 9, fontWeight: 400 }}>
                  <Label value="الأيام" position="insideBottomRight" dx={25} dy={-13} fill='black' fontSize={9} fontWeight={700} />
                </XAxis>
                <YAxis tick={{ dx: -30, fontSize: 9, fontWeight: 400 }} />
              </LineChart>

            </div>
          </div>

        </div>




      </div>
    </>
  )
}
