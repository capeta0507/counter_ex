import React, { Component } from 'react'

class CounterButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}
export default CounterButton