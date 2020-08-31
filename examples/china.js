import React from 'react';
import ReactDOM from 'react-dom';
import Testone, { CHINA } from '../src';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `

const data4 = [
  {shortArea: '上海', supplyAreaCount: 400, customerAreaCount: 30},
  {shortArea: '湖南', supplyAreaCount: 28, customerAreaCount: 899},
  {shortArea: '北京', supplyAreaCount: 520, customerAreaCount: 27},
  {shortArea: '江苏', supplyAreaCount: 41, customerAreaCount: 567},
  {shortArea: '青海', supplyAreaCount: 66, customerAreaCount: 999},
  {shortArea: '内蒙古', supplyAreaCount: 44, customerAreaCount: 34},
  {shortArea: '台湾', supplyAreaCount: 230, customerAreaCount: 14},
]
const data5 = [
  {shortArea: '上海', supplyAreaCount: 5, customerAreaCount: 1},
  {shortArea: '湖南', supplyAreaCount: 0, customerAreaCount: 0},
  {shortArea: '北京', supplyAreaCount: 1, customerAreaCount: 5},
  {shortArea: '江苏', supplyAreaCount: 1, customerAreaCount: 2},
  {shortArea: '青海', supplyAreaCount: 0, customerAreaCount: 0},
  {shortArea: '内蒙古', supplyAreaCount: 0, customerAreaCount: 0},
  {shortArea: '台湾', supplyAreaCount: 0, customerAreaCount: 0},
]
const option = {
  height: 422,
  dataAdapter: {
    dataKey: 'shortArea',
    valueKey: ['supplyAreaCount', 'customerAreaCount'],  // supplyAreaCount, customerAreaCount
    index: 2,
    color: '#637cfc', // #fd95a3, #637cfc
  },
}

function render(container) {
  ReactDOM.render(
    <div>
      <Testone />
      <div>
        <CHINA option={option} mapData={data5} />
        {/* <CHINA /> */}
      </div>
    </div>, container
  )
}

render(reactContainer)
