import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './template/header'
import Menu from './template/menu'
import List from './component/list'
//import ModalIncluir from './component/modalIncluir'
import { Button,Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       showModal : false,

    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  open(){this.setState({showModal : true});}
  close(){this.setState({showModal:false});}
  render() {
    return (
      <div>
        
            <Header logoImg={logo}/>
            <Menu/>
            <Button bsStyle="primary" bsSize="large" onClick={this.open}>Abrir Modal</Button>
            <List icon="remove" nome="Deletar"/>
            {/* <ModalIncluir title="Cadastro Produto" sm={this.state.showModal}/> */}
            <Modal show={this.state.showModal} onHiden={this.close}>
      <Modal.Header>
        <Modal.Title>Cadastro Produto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.close}>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal>
            </div>

    );
  }
}

export default App;
