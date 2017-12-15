import React from 'react'
import {Table,Button,Glyphicon} from 'react-bootstrap'
import ListItem from './listItem'
export default props =>(

<Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Descrição</th>
        <th>Operação</th>
      </tr>
    </thead>
    <tbody>
    <ListItem index="1" desc="teste" btn={<Button  bsStyle="danger" onClick={props.onClick}><Glyphicon bsClass={props.icon}/> {props.nome}</Button>}/>
    </tbody>
  </Table>

)