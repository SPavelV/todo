import React,{Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './index.css'

export default class App extends Component{
  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Make Awesome app'),
      this.createToDoItem('Have lunch')
    ]
  }

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++, 
    }
  }

  deleteItem = (id) => {
    this.setState( ({todoData}) => {
      const newArr = todoData.filter((el) => el.id !==id)

      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createToDoItem(text)

    this.setState(({todoData})=>{
      return {
        todoData: [...todoData, newItem]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return todoData.map(element => {
        if(element.id === id) element.important = !element.important
        return element
      })
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return todoData.map(element => {
        if(element.id === id) element.done = !element.done
        return element
      })
    })
    
  }

  render() {
    return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>

      <ToDoList 
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        onDeleted = {this.deleteItem}
        toDo={this.state.todoData}/>
        <ItemAddForm addItem={this.addItem}/>
    </div>
  )}
}
