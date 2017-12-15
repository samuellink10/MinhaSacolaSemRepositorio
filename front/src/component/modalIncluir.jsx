import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'

export default class ModalIncluir extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title : this.props.title,
         showModal: this.props.sm
      }
      this.open = this.open.bind(this)
      this.close = this.close.bind(this)
    }
    
    open(){
        this.setState({showModal:true});
    }
    close(){
        this.setState({showModal:false});
    }
  render() {
    return (
      <div>
      <Modal show={this.state.showModal} onHiden={this.close}>
      <Modal.Header>
        <Modal.Title>{this.state.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.close}>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal>
      </div>
    )
  }
}
