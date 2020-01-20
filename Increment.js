import React ,{Component}from 'react';


class Increment extends Component{
  constructor(){
      super();
      console.log(this.props);
      this.state={
        count: 0
      }
     this.handleIncrement = this.handleIncrement.bind(this);
      
  }
  handleIncrement(){
    
    console.log(this);
    this.setState({count: this.state.count + 1});
    alert(this.state.count);
    //alert(this.state.count++)  //only it get updated at the alert box
  }

  handleIncrementMouse = () => {
    
    console.log(this);
    
    alert(this);
    //alert(this.state.count++)  //only it get updated at the alert box
  }
  render(){
    return(

        <div className="jumbotron">
        <div className="alert alert-info">
          <p>Hello this is the Increment</p>
      <p className="badge badge-secondary">{this.state.count}</p>
      <p>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
          </button>
      </p>
      <p>
          <button className="btn btn-primary" onClick={this.handleIncrementMouse}>
          IncrementMouse
          </button>
      </p>
      </div>
      </div>
  
    );
     
    
  }
}

export default Increment;
