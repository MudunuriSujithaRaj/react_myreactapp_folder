import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import List from "../src/Component/PrintList.js";
import Increment from "../src/Component/Increment.js"


class App extends Component{
  constructor(){
    super();
    console.log(this);
    console.log("App constructor");
    /*this.state = {
      title: "My React App State"
    };*/
  }

componentDidMount() {
  console.log("App Mounted ");
}
componentDidUpdate(prevProps,prevState){
  console.log("I am componentDidUpdate in app");
  console.log(prevProps,prevState);
}

render(){
  console.log("I am render in App");
  return(
    <div className="Container">
      <p className = "alert alert-warning">I am the master component</p>

      <List></List>

      <Increment></Increment>
    </div>
  );
}

}

/*function App() {
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
<header className="jumbotron">
        <div>{this.props.title}</div>
        <div>{this.state.title}</div>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
*/

export default App;
