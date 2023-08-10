const initialState = {
  history: '',
  result:0
}


class Calculator extends React.Component{
  constructor(props){
      super(props);
    this.state={
      history:'',
      result: 0
    }
    this.handleClick=this.handleClick.bind(this)
    this.reset=this.reset.bind(this)
    this.getResult=this.getResult.bind(this)
    this.getDecimal=this.getDecimal.bind(this)
    this.checkZero = this.checkZero.bind(this)
    this.operatorHandler = this.operatorHandler.bind(this)
    this.handleBack = this.handleBack.bind(this)
    }
  handleClick(e){
    
     let regex = /^[*+-\/]+/;
    let val= e.target.value;
    let input = this.state.history
     let last = input.charAt(input.length - 1);
    this.setState({
      history: this.state.history.concat([val])
    })
    
  
  }
  getDecimal(e){
    let val = e.target.value;
   let prev=this.state.history;
    let last = prev.charAt(prev.length - 1);
    let secondLast = prev.charAt(prev.length - 2);
   let regex= /[-+*\/]/
  
   if(prev.indexOf('.') === -1){
     last == ''?
         this.setState({
      history: this.state.history.concat(0,[val])
        }) :
         this.setState({
      history: this.state.history.concat([val])
        })
      
     
   } else{
    if(prev.includes(val) && regex.test(last) == true ){
      this.setState({
      history: this.state.history.concat(0,[val])
        })
    } else if(prev.includes(val) && regex.test(secondLast)){
      last === ''?  this.setState({
      history: this.state.history.concat(0,[val])
        }) : this.setState({
      history: this.state.history.concat([val])
        })
    }
     else{
      console.log('multiple decimals')
    }
   
   }
  
    
    
   
  }
  
  getResult() {
    let input = this.state.history;
    let res = math.evaluate(input);
  
    if (res) {
      // If a result is obtained from the input expression
      // Update the state with the new result value
      this.setState({
        result: res
      });
  
      // Set the history to the result value so that
      // the next operation can be performed on the result
      // rather than the previous input expression
      this.setState({
        history: res.toString()
      });
    }
  }
  

  checkZero(e){
 let input = this.state.history
  let regex = /^0+/;
    let last= input.charAt(input.length - 1)
   let operator = /[-+*\/]/
 
     let val= e.target.value;
   this.setState({
      history: this.state.history.concat([val])
    })
     if(regex.test(input)){
       this.setState({
         history: this.state.history.replace(/^0{2,}/, '')
       })
    }
    else if(regex.test(input) && operator.test(last)){
      this.setState({
      history: this.state.history.concat([val])
    })
    }
  }
 operatorHandler(e){
  let targeted = e.target.value
  let input=this.state.history
  let regex = /[*+\/]+$/;
   let regex1 = /[-]+$/
   let lastDigit = /\d+$/
 let last = input.charAt(input.length - 1);
   let toBeRemoved = input.match(/[*+\/]+(?=' '$)/)
  
 if(input === ''){
    this.setState({
      history: this.state.history.concat(0,targeted)
    })
 } else{
   this.setState({
      history: this.state.history.concat(targeted)
    })
 if(lastDigit.test(input)){
 
 }else if(regex.test(input) && regex.test(targeted)){
     this.setState({
      history: this.state.history.replace(/.$/,targeted)
    })
 } else if(regex.test(input) && regex1.test(targeted)){
 
 } else{
   if(targeted === '-'){
      this.setState({
      history: this.state.history.replace(/.$/,'+')
    })
   }else{
     console.log('do nothing')
   }
 }
 }
 


 } 
  handleBack(e){
    
    let targeted = e.target.value;
     this.setState({
      history: this.state.history.replace(/.$/,'')
    })
  }
  reset(){
 this.setState({ ...initialState})
  }
    
  render() {
     return(
       <div id="calculator">
         <div id="display">
           <div id="history">{this.state.history}</div>
           <div id="result">{this.state.result}</div>
         </div>
         <div className="container">
           <div className="nmbrs">
             <button onClick={this.reset} className="btn-pad" id="clear" value="C">C</button>
    <button onClick={this.handleClick} className="btn-pad" id="modulo" value="%">%</button>
    <button onClick={this.handleBack} className="btn-pad" id="backspace" value="&larr">&larr;</button>
   <button onClick={ this.operatorHandler} className="btn-pad operator" id="add" value="+">+</button>
    <button onClick={this.handleClick} className="btn-pad" id="nine" value="9">9</button>
    <button onClick={this.handleClick} className="btn-pad" id="eight" value="8">8</button>
     <button onClick={this.handleClick} className="btn-pad" id="seven" value="7">7</button>
    <button onClick={ this.operatorHandler} className="btn-pad operator" id="substract" value="-">-</button>
     <button onClick={this.handleClick} className="btn-pad" id="six" value="6">6</button>
     <button onClick={this.handleClick} className="btn-pad" id="five" value="5">5</button>
    <button onClick={this.handleClick} className="btn-pad" id="four" value="4">4</button>
    <button onClick={ this.operatorHandler} className="btn-pad operator" id="multiply" value="*">*</button>
    <button onClick={this.handleClick} className="btn-pad" id="three" value="3">3</button>
     <button onClick={this.handleClick} className="btn-pad" id="two" value="2">2</button>
    <button onClick={this.handleClick} className="btn-pad" id="one" value="1">1</button>
    <button onClick={ this.operatorHandler} className="btn-pad operator" id="divide" value="/">/</button>
    <button onClick={this.getDecimal}  className="btn-pad" id="decimal" value="." >.</button>
    <button onClick={this.checkZero} className="btn-pad" id="zero" value="0">0</button>
    <button onClick={this.getResult} className="btn-pad" id="equals" value="=">=</button>
           </div>
           
         </div>
         </div>
     ) 
    
  }
}

ReactDOM.render(<Calculator />,document.getElementById("root"))