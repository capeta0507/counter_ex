import React, { Component } from 'react'
import { createStore } from 'redux';
import Counter from './Counter';
import CounterButton from './CounterButton';
import './main.css';

let reducer = function (state,action) { 
    // console.log("Reducer ...");
    // Switch 用來判斷各種不同的情況，而決定要執行哪個部分的程式碼
    switch(action.type){
        case "INC":
            return {count : state.count + action.num};
        case "DEC":
            return {count : state.count - action.num};
        default:
            return state;
    }
}

let handler = function(){
    //  console.log("subscribe(handler)");
    console.log(store.getState());

}



let store = createStore(reducer,{count: 0});
let quietSubs = store.subscribe(handler);

class Main extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount(){
        
        
    }

    componentWillUnmount(){
        alert("componentWillUnmount");
        quietSubs();
    }

    increment(){
        // var currentCount = this.state.count;
        // currentCount += 1;
        // this.setState({
        //     count:currentCount
        // })
        store.dispatch(
            {
                type:"INC",
                num:1
            }

        )
        this.setState({
            count : store.getState().count
        })
    }
    decrement(){
        // var currentCount = this.state.count;
        // currentCount -= 1;
        // this.setState({
        //     count:currentCount
        // })
        store.dispatch(
            {
                type:"DEC",
                num:1
            }
        )
        this.setState({
            count : store.getState().count
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