import React from 'react';

class Value extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }

}

Value.propTypes = {
  number: React.PropTypes.number
}

Value.defaultProps = {
  number: -1
}

export default Value
