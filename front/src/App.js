import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './template/header'
import Menu from './template/menu'

class App extends Component {
  render() {
    return (
      <div>
            <Header logoImg={logo}/>
            <Menu/>
            </div>

    );
  }
}

export default App;
