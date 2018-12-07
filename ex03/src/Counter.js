import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div className="count">
        {this.props.count}
      </div>
    )
  }
}
export default Counter