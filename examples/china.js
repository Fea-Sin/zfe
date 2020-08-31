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

const data2 = [
  {name: '上海', value: 400},
  {name: '湖南', value: 28},
  {name: '北京', value: 520},
  {name: '江苏', value: 41},
  {name: '青海', value: 66},
  {name: '内蒙古', value: 44},
  {name: '台湾', value: 230},
]
const data3 = [
  {name: '上海', supplyAreaCount: 400, customerAreaCount: 30},
  {name: '湖南', supplyAreaCount: 28, customerAreaCount: 899},
  {name: '北京', supplyAreaCount: 520, customerAreaCount: 27},
  {name: '江苏', supplyAreaCount: 41, customerAreaCount: 567},
  {name: '青海', supplyAreaCount: 66, customerAreaCount: 999},
  {name: '内蒙古', supplyAreaCount: 44, customerAreaCount: 34},
  {name: '台湾', supplyAreaCount: 230, customerAreaCount: 14},
]
const option = {
  height: 422,
  dataAdapter: {
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
        <CHINA option={option} mapData={data3} />
      </div>
    </div>, container
  )
}

render(reactContainer)
