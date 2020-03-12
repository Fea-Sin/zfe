import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

class Comp extends PureComponent {

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
      <div className={`${prefixCls}-text hello`}>HELLO COMP</div>
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
