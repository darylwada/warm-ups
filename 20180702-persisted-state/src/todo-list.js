import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function TodoList({ todos }) {
  return (
    <ListGroup>
      {
        todos.map(({ id, text }) =>
          <ListGroupItem key={id}>{ text }</ListGroupItem>
        )
      }
    </ListGroup>
  )
}
