import React from 'react';

class Control extends React.Component {
  render () {
    return (
        <div>
          <button onClick={this.props.onPlus}>+</button>
          <button onClick={this.props.onSubract}>-</button>
          <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
        </div>
    )
  }
}

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defied');
}

Control.propTypes = {
  onPlus: React.PropTypes.func,
  onSubract: React.PropTypes.func,
  onRandomizeColor: React.PropTypes.func
}

Control.defaultProps = {
  onPlus: () => createWarning('onPlus'),
  onSubract: () => createWarning('onSubract'),
  onRandomizeColor: () => createWarning('onRandomizeColor')
}


export default Control
