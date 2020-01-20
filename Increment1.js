import React,{ Component } from 'react';



class Increment extends Component{
  
    constructor(){
    super();
    console.log(this);
    this.state = {
        count: 0
    };
    console.log("I am constructor in Increment");
    this.handleIncrement = this.handleIncrement.bind(this);
  }
handleIncrement(){
    console.log(this);
    this.setState({count: this.state.count + 1});
    alert(this.state.count);
}
//using arrow operato to bind

handleIncrementMouse = () => {
    alert(this);
    console.log(this);
}
componentDidMount(){
    console.log("Increment Mounted");
}
componentDidUpdate(prevProps,prevState){
console.log("I am ComponentDidUpdate in Increment");
console.log(prevProps,this.props);
console.log(prevState,this.state);
}



render(){
    console.log("I am render in Increment");
  return(
    <div className = "jumbotron">
        <p className = "alert alert-info">Hello I am Increment Component</p>
        <p className = "badge badge-secondary">{this.state.count}</p>
       <p><button className = "btn btn-primary" onClick={this.handleIncrement}>Increment</button></p>
       <p><button className = "btn btn-primary" onMouseEnter={this.handleIncrementMouse}>IncrementMouse</button></p>
    </div>
        
  );
}
}

export default Increment;