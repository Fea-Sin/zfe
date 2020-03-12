import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/polar';
import 'echarts/lib/chart/scatter';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.chart = React.createRef()
    this.scatter = null
  }

  init = () => {
    const { option={} } = this.props
    this.scatter = echarts.init(this.chart.current)
    // let option = {
    //   xAxis: {},
    //   yAxis: {},
    //   tooltip: {
    //     formatter: 'Group {a}: ({c})'
    //   },
    //   series: [{
    //       symbolSize: 10,
    //       data: [
    //         [10.0, 8.04],
    //         [8.0, 6.95],
    //         [13.0, 7.58],
    //         [9.0, 8.81],
    //         [11.0, 8.33],
    //         [14.0, 9.96],
    //         [6.0, 7.24],
    //         [4.0, 4.26],
    //         [12.0, 10.84],
    //         [7.0, 4.82],
    //         [5.0, 5.68]
    //       ],
    //       type: 'scatter',
    //       markLine: {
    //         animation: false,
    //         label: {
    //             formatter: 'y = 0.5 * x + 3',
    //             position: 'middle'
    //         },
    //         lineStyle: {
    //             type: 'solid'
    //         },
    //         tooltip: {
    //             formatter: 'y = 0.5 * x + 3'
    //         },
    //         data: [
    //           // [
    //           //     {
    //           //         // 起点和终点的项会共用一个 name
    //           //         name: '最小值到最大值',
    //           //         type: 'min'
    //           //     },
    //           //     {
    //           //         type: 'max'
    //           //     }
    //           // ],
    //           [
    //             {
    //                 name: '两个坐标之间的标线',
    //                 coord: [4.0, 4.26]
    //             },
    //             {
    //                 coord: [14.0, 9.96]
    //             }
    //           ]                                   
    //         ]        
    //       }
    //   }]      
    // }

    this.scatter.setOption(option)
  }

  onResizeHandle = () => {
    this.scatter.resize()
  }

  componentDidMount() {
    this.init()
    window.addEventListener('resize', this.onResizeHandle)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeHandle)
  }
  
  render() {
    const { width, height } = this.props
    return (
      <div ref={this.chart} style={{ width, height }}>
      </div>
    )
  }
}

App.propTypes = {
  option: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
App.defaultProps = {
  width: 400,
  height: 300,
}

export default App;
