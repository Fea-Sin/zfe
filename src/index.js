import React from 'react';
import PropTypes from 'prop-types';
import zfePackage from '../package.json';
import SCATTER from './SCATTER';
import CHINA from './CHINA';

class ZFE extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {

    const { prefixCls } = this.props
    
    return (
      <div className={`${prefixCls}`}>
        <div>echarts version {zfePackage.dependencies.echarts.slice(1)}</div>
        <div>ZFE version {zfePackage.version}</div>
      </div>
    )
  }
}

ZFE.propTypes = {
  prefixCls: PropTypes.string
}
ZFE.defaultProps = {
  prefixCls: 'cr-app'
}

export {
  SCATTER,
  CHINA
}

export default ZFE;
