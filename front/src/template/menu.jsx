
import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#/">Minha Sacola</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#Home/">Home</a></li>
      <li><a href="#Produto/">Produto</a></li>
      <li><a href="#Sacola/">Sacola</a></li>
    </ul>
  </div>
</nav>
    )
  }
}
