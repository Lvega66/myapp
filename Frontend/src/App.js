import logo from './logo.svg';
import './App.css';


import React from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
class App extends React.Component {
constructor(props){
super(props);
this.state = { reacttext: "texto1",
 reacttext2: "texto2", reactvarInput: "Input Text"
}
this.functionName = this.functionName.bind(this)
}

functionName(){
  this.setState({text: "Hola from functionName"})

}

fetchFunctionName = () => {
  fetch("http://localhost:3001")
  .then(response => response.json())
  .then(data => console.log(data["text"]))
}

arrowFunctionName = () => {
  this.setState({text: "Hola from ArrowfunctionName"})
}

fetchMethod  = () => {
  fetch("http://localhost:3001")
  .then(response => response.json())
  .then(
    (data) => {
      console.log(data)
    this.setState({reacttext: data["text"], reacttext2: data["otro"]})
  });
}

functionInput = (hola) => {
  console.log(hola.target.value)
  this.setState({reactvarInput: hola.target.value})
}

render() {
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
      Aprendiendo React
      <br/>
      {this.state.text}
      <br/>
      {this.state.reacttext2}
      <br/>
      {this.state.reacttext+" "+this.state.reacttext2}
    </a>
    <button onClick={this.functionName}>Funcioncita</button>
    <button onClick={this.arrowFunctionName}>FuncionArrow</button>
    <button onClick={this.fetchFunctionName}>FuncionFetch</button>
    <button onClick={this.fetchMethod}>FuncionMetodo</button>
<div>
  <br/>
  {this.state.reactvarInput}
  <br/>
  <input
    value={this.state.reactvarInput}
    onChange={(event)=> {
      this.functionInput(event)
      }
    }
    >
    </input>
    
</div>
  </header>
</div>
);
}
}
export default App;