import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TodoList from './todo-list'
import TodoForm from './todo-form'

export default class App extends Component {
  constructor(props) {
    super(props)
    const nextId = window.localStorage.getItem('nextId')
    const todosJSON = window.localStorage.getItem('todos')
    this.state = {
      nextId: JSON.parse(nextId) || 1,
      todos: JSON.parse(todosJSON) || []
    }
    this.addTodo = this.addTodo.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }
  addTodo({ text }, form) {
    this.setState(({ nextId, todos }) => ({
      nextId: nextId + 1,
      todos: [...todos, { id: nextId, text }]
    }), () => form.reset())
  }
  render() {
    return (
      <Container>
        <Row>
          <Col
            sm={{ size: 12 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}>
            <h1 className="text-center">Todos</h1>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
