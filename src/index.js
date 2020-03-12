import React from 'react';
import PropTypes from 'prop-types';
import zfePackage from '../package.json';

class Comp extends React.Component {

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
      <div className={`${prefixCls}-text hello`}>HELLO COMP9999</div>
    )
  }
}

Comp.propTypes = {
  prefixCls: PropTypes.string
}
Comp.defaultProps = {
  prefixCls: 'cr-app'
}
export default Comp
