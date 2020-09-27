import React,{Component} from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import './App.css';
class App extends  Component {
 
  render () {
    return (
      <div className="App">
        <Nav />
        <Logo />
      </div>
    );
  }

}

export default App;
