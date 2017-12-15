
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="App">
    <header className="App-header">
      <img src={this.props.logoImg} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome Strange!</h1>
    </header>
  </div>
    )
  }
}
