# JavaScript React Redux - 數字遞增範例
###### tags: `React` `Redux` `JavaScript`

以下是3種數字遞增遞減的範例
1. HTML + JS 範例
```javascript=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>counter</title>
    <link rel="stylesheet" href="./counter.css">
</head>
<body>
    <div id="container">
        <div class="count">
            <span id="count">0</span>
        </div>
        <button onclick="decrement()">-</button>
        <button onclick="increment()">+</button>
    </div>
</body>
<script>
    var num = 0;
    var currentCount = document.getElementById("count");
    
    function decrement(){
        num --;
        currentCount.innerHTML = num
    }
    function increment(){
        num ++;
        currentCount.innerHTML = num
    }
</script>
</html>
```
2. React 範例
```javascript=
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
```
3. React + Redux 範例
```javascript=
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
// 用來檢視結果，真正的結果要在increment及decrement呈現
let handler = function(){
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

    increment(){
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
```