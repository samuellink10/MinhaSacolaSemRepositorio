import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './template/header'
import Menu from './template/menu'
import List from './component/list'
import ModalIncluir from './component/modalIncluir'
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       showModal : false,
    }
  }
  open(){
    this.setState({showModal : true} );
  }
  
  render() {
    return (
      <div>
        
            <Header logoImg={logo}/>
            <Menu/>
            <Button bsStyle="primary" bsSize="large" onClick={()=>this.open()}>Abrir Modal</Button>
            <List icon="remove" nome="Deletar"/>
            <ModalIncluir title="Cadastro Produto" sm={true}/>
            </div>

    );
  }
}

export default App;
