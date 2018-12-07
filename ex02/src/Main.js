import React, { Component } from 'react'
import Counter from './Counter';
import CounterButton from './CounterButton';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        
    }
    
    increment(){
        var currentCount = this.state.count;
        currentCount += 1;
        this.setState({
            count:currentCount
        })
    }
    decrement(){
        var currentCount = this.state.count;
        currentCount -= 1;
        this.setState({
            count:currentCount
        })
    }
  render() {
    return (
      <div className="main_bg">
        <Counter count={this.state.count}/>
        <CounterButton decrement={this.decrement} increment={this.increment} />
      </div>
    )
  }
}
export default Main