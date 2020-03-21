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
    if (this.chart.current) {
      this.scatter = echarts.init(this.chart.current)
      this.scatter.setOption(option)
    }
  }

  onResizeHandle = () => {
    this.scatter.resize()
  }

  componentDidMount() {
    this.init()
    window.addEventListener('resize', this.onResizeHandle)
  }

  componentDidUpdate() {
    this.init()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeHandle)
  }
  
  render() {
    const { width, height } = this.props
    this.init()
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
