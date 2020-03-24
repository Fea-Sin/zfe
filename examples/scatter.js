import React from 'react';
import ReactDOM from 'react-dom';
import Testone, { SCATTER } from '../src';
import '../assets/index.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `

const option = {
  xAxis: {},
  yAxis: {},
  tooltip: {
    formatter: function(params) {
      // console.log('what is this----', params)
      var res = '<div>' + params.data[0].toFixed(2) + ' , ' + params.data[1].toFixed(2) + '</div>'
      return res
    }, 
    backgroundColor: 'rgba(250,250,250,1)',
    borderColor: '#e3e2e1',
    borderWidth: 1,
    padding: 8,
    textStyle: {
      color: '#000',
    }
  },
  color: ['#1890FF'],
  series: [{
      name: '散点图',
      type: 'scatter',
      symbolSize: 10,
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ],
      markLine: {
        animation: false,
        symbol: 'none',
        symbolSize: 0,
        label: {
            formatter: 'y = 0.5 * x + 3',
            position: 'middle',
        },
        lineStyle: {
            type: 'solid',
            color: '#FF516A',
            width: 2,
        },
        tooltip: {
            formatter: 'y = 0.5 * x + 3'
        },
        data: [
          // [
          //     {
          //         // 起点和终点的项会共用一个 name
          //         name: '最小值到最大值',
          //         type: 'min'
          //     },
          //     {
          //         type: 'max'
          //     }
          // ],
          [
            {
                name: '两个坐标之间的标线',
                coord: [4.0, 4.26]
            },
            {
                coord: [14.0, 9.96]
            }
          ]                                   
        ]        
      }
  }]    
}

function render(container) {
  ReactDOM.render(
    <div>
      <Testone />
      <SCATTER
        width='100%'
        option={option}
      />
    </div>, container
  )
}

render(reactContainer)
