import React ,{Component}from 'react';
//import logo from './logo.svg';
import './App.css';
import List from "../src/Component/PrintList"
import Increment from "../src/Component/Increment"
import { Button } from 'react-bootstrap';


class App extends Component{
  constructor(){
      super();
      //console.log(this.props);
      console.log(this);
      console.log("I am constructor in app");
      
      
  }
  componentDidMount(){
    console.log("I am ComponentDidMount in app");
  }
  render(){
    return(
      <div className="Container">
      <List></List>
      <Increment></Increment>
      </div>
    );
  }
}
/*

<header className="jumbotron">
                

<button type="button" className="btn btn-primary">Primary</button>
    <div>{this.props.title}</div>
    <div>{this.state.title}</div>
        
      </header>




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
