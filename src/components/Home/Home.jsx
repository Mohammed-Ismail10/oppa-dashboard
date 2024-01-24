import React, { useEffect, useRef } from 'react'
import style from './Home.module.css';
import Plot from 'react-plotly.js';
import CanvasJSReact from '@canvasjs/react-charts';
import { Chart } from "react-google-charts";
import { CartesianGrid, Line, Tooltip, LineChart, XAxis, YAxis, Legend, Label } from 'recharts';
import * as d3 from "d3";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from 'victory';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;




export default function Home() {

  // const options1 = {
  //   animationEnabled: true,
  //   theme: "light2", // "light1", "dark1", "dark2"
  //   title: {
  //     text: "المستخدمين",
  //     fontSize: 30,
  //     fontColor: "#9A9A9A",
  //     fontWeight: "bold",
  //     horizontalAlign: "right",
  //   },
  //   axisY: {
  //     title: "المستخدمين",
  //     titleFontColor: "black",
  //     titleFontSize: 20,
  //     titleFontWeight: "bold",
  //     labelFontColor: "black",
  //     labelFontSize: 14,
  //   },
  //   axisX: {
  //     title: "الأيام",
  //     titleFontColor: "black",
  //     titleFontSize: 20,
  //     titleFontWeight: "bold",
  //     labelFontColor: "black",
  //     labelFontSize: 14,
  //     interval: 40
  //   },
  //   data: [{
  //     type: "line",
  //     toolTipContent: "مستخدمين {y} : {x} ايام",
  //     dataPoints: [
  //       { x: 0, y: 0 },
  //       { x: 10, y: 20 },
  //       { x: 70, y: 40 },
  //       { x: 140, y: 64 },
  //       { x: 210, y: 62 },
  //       { x: 370, y: 64 },
  //       { x: 350, y: 30 },
  //       { x: 460, y: 60 },
  //     ]
  //   }],
  //   height: 300
  // }


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
      toolTipContent: " عدد المستخدمين {y} : عدد الأيام {x}",
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
      toolTipContent: " عدد الغرف {y} : عدد الأيام {x}",
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

        <div className={`position-relative mt-5  w-50`}>
          <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
          <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-0 bg-search border-0 ps-5`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
        </div>

        <div className='row justify-content-between mt-5 pt-4'>

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
            {/* <div className={`${style.roundedChart} pt-3 position-relative mx-1`}>

              <div className={`${style.headerChart} mb-2 w-100 d-flex justify-content-between`}>
                <span className='fs15 fw-medium title-chart'>الــ VIP المباع</span>
                <span className='fw-bold fs9'>VIP</span>
              </div>

              <LineChart className='bg-dange w-100' width={570} height={250} data={dataa} margin={{ right: 45 }}>
                <Line type={'monotone'} dataKey={'react'} stroke='blue' strokeWidth={2} />
                <CartesianGrid />
                <XAxis dataKey="name" tick={{ fontSize: 9, fontWeight: 400 }}>
                  <Label value="الأيام" position="insideBottomRight" dx={25} dy={-13} fill='black' fontSize={9} fontWeight={700} />
                </XAxis>
                <YAxis tick={{ dx: -30, fontSize: 9, fontWeight: 400 }} />
              </LineChart>
            </div> */}

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
            {/* <div className={`${style.roundedChart} pt-3 mx-1 px-xl-4 position-relative`}>

              <div className={`${style.headerChart} mb-2 w-100 d-flex justify-content-between`}>
                <span className='fs15 fw-medium title-chart'>الــ VIP المباع</span>
                <span className='fw-bold fs9'>VIP</span>
              </div>

              <span className={`${style.endY} fw-bold fs9 position-absolute `}>VIP</span>
              <VictoryChart theme={VictoryTheme.material} width={700}>

                <VictoryLabel text="الـ VIP الـمباع" x={600} y={10} textAnchor="end" style={{ fontSize: 14, fontWeight: '500', fontFamily: "Cairo, sans-serif", fill: '#9A9A9A' }} />
                <VictoryLine
                  style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
                  ]}

                />
              </VictoryChart>

            </div> */}
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
