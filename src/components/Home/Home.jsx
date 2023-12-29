import React from 'react'
import style from './Home.module.css';
import Plot from 'react-plotly.js';
import CanvasJSReact from '@canvasjs/react-charts';
import { Chart } from "react-google-charts";
import { CartesianGrid, Line, Tooltip, LineChart, XAxis, YAxis } from 'recharts';


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
      toolTipContent: "{y} users :{x} days",
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
      toolTipContent: "{y} users :{x} days",
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
  const options3 = {
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
      toolTipContent: "{y} users :{x} days",
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
  const options4 = {
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
      toolTipContent: "{y} users :{x} days",
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









  return (
    <>
      <div className='container-xxl'>

        <div className={`position-relative pt-5 mt-3 mb-4 ps-3 w-50`}>
          <i className="fa-solid fa-magnifying-glass position-absolute pt-2 mt-1 ps-3 h-100"></i>
          <input className={`${style.shadowSearch} ${style.searchInput} form-control rounded-0 bg-search border-0 ps-5`} type="search" name="" id="" placeholder='يمكنك البحث هنا' />
        </div>


        <div className="row">
          <div className="col-6 my-4 px-4">
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options1} />
            </div>
          </div>
          <div className="col-6 my-4  px-4">
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options2} />
            </div>
          </div>
          <div className="col-6 my-4 px-4" >
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options3} />
            </div>
          </div>
          <div className="col-6 my-4 px-4">
            <div className={`${style.roundedChart}`}>
              <CanvasJSChart options={options4} />
            </div>
          </div>
        </div>




      </div>
    </>
  )
}
