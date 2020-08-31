import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import mapJson from './mapJson';
import geoCoordMap from './geoCoordMap';
import chinaCoordMap from './chinaCoordMap';
import IsEqual from 'lodash/isEqual';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.chart = React.createRef()
    this.chinaMap = null
  }
  
  setData = (data) => {
    const { option } = this.props
    const dataAdapter = option && option.dataAdapter
    const valueKey  = dataAdapter && dataAdapter.valueKey
    const dataKey = (dataAdapter && dataAdapter.dataKey) || 'name'

    let res = [];
    if (Array.isArray(data) && data.length > 0) {
      for (let i=0; i<data.length; i++) {
        let geoCoord = chinaCoordMap[data[i][dataKey]]
        if (geoCoord) {
          res.push({
            value: geoCoord.concat( valueKey.map(item => data[i][item]) ),
            name: data[i][dataKey]
          })
        }
      }
    }
    return res;
  }

  init = () => {
    const { mapData, option } = this.props
    const dataAdapter = option && option.dataAdapter
    const INDEX = (dataAdapter && dataAdapter.index) || 1
    const COLOR = (dataAdapter && dataAdapter.color) || '#fd95a3'

    const optionT = {
      backgroundColor: '#fff',
      tooltip : {
       trigger: 'item',
       formatter: function(params) {
          var tipHtml = '';
          tipHtml = '<div style="border: none;height:60px;width:181px;border-radius:2px;background:#fff;box-shadow:0px 2px 6px 1px rgba(51, 51, 51, 0.14);position: absolute;top: 0;left: 0;">' +
            '<div style="color:#647BFC;text-align: center;padding: 8px">' + params.name + '</div>' +
            '<div style="color:#333333;padding:5px;background: #F8F9FB;text-align:center;">' +
            '<span>供应商：' + params.value[2] + '</span>' +
            '<span style="margin-left: 8px;margin-right: 8px">|</span>' +
            '<span>客户：' + params.value[3] + '</span>' +
            '</div>' +
            '</div>';
          return tipHtml;
       }
      },
      geo: {                             //地里坐标系组件（相当于每个省块）
       map: 'china',
       roam: false,                      //是否开启缩放 
       label: {
         emphasis: {                     //鼠标划到后弹出的文字 显示省份
          color: '#545454',              //高亮背景色
          show: false,                    //是否高亮显示
          fontSize:12                    //字体大小
         }
       },
       itemStyle: {                      //坐标块本身
         normal: {                       //坐标块默认样式控制
          areaColor: '#f7f7ff',          //坐标块儿颜色
          borderColor: '#c8c8d3'
         },
         emphasis: {
          areaColor: '#dedef2'           //放坐标块儿上，块儿颜色
         }
       }
      },
      series: [
       {
         name: '信息',                    // series名称
         type: 'effectScatter',          // series图表类型
         effectType: 'ripple',           // 圆点闪烁样式，目前只支持ripple波纹式
         coordinateSystem: 'geo',        // series坐标系类型
         data: this.setData(mapData),     // series数据内容
        //  showEffectOn: 'emphasis',    //配置何时显示特效 render 一直显示，emphasis放上去显示
         showEffectOn: 'render',         //配置何时显示特效 render 一直显示，emphasis放上去显示
         symbolSize: function (val) {
           let count = val[1 + INDEX] / 30
           count = Math.max(count, 3)
           count = Math.min(count, 15)
           return count;
         },
         rippleEffect: {                // ripple的样式控制
          brushType: 'stroke',
          color: COLOR,
         },
         label: {
           normal: {
             formatter: '{b}',
             position: 'right',
             show: true                //显示位置信息，
           }
         },
    
         itemStyle: {                  //散点本身显示控制
          normal: {
            color: COLOR,
            shadowBlur: 10,
            shadowColor: COLOR
          }
         },
         zlevel: 1
       }
      ],
      symbolSize: 12,
    }


    if (this.chart.current) {
      if (this.chinaMap) {
        this.chinaMap.clear()
      }
      this.chinaMap = echarts.init(this.chart.current)
      this.chinaMap.setOption(optionT)
    }
  }

  onResizeHandle = () => {
    this.chinaMap.resize()
  }
  componentDidMount() {
    // 注册地图
    echarts.registerMap('china', mapJson)

    this.init()
    window.addEventListener('resize', this.onResizeHandle)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeHandle)
  }

  componentDidUpdate(prevProps) {
    if ( !IsEqual(prevProps.option, this.props.option) || !IsEqual(prevProps.mapData, this.props.mapData) ) {
      this.init()
    }
  }

  render() {
    const { option } = this.props
    const { width='100%', height=300 } = option

    return (
      <div ref={this.chart} style={{ width, height }}></div>
    )
  }
}

App.propTypes = {
  option: PropTypes.object,
  mapData: PropTypes.array,
}
App.defaultProps = {
  mapData: [],
  option: {
    width: '100%',
    height: 300,
  },
}

export default App;
