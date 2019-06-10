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
      { id: 1, label: 'Drink Coffee'},
      { id: 2, label: 'Make Awesome app'},
      { id: 3, label: 'Have lunch'}
    ]
  }

  deleteItem = (id) => {
    this.setState( ({todoData}) => {
      const newArr = todoData.filter((el) => el.id !==id);

      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      id: this.maxId++, 
      important: false,
      label: text
    }

    this.setState(({todoData})=>{
      return {
        todoData: [...todoData, newItem]
      }
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
        onDeleted = {this.deleteItem}
        toDo={this.state.todoData}/>
        <ItemAddForm addItem={this.addItem}/>
    </div>
  )}
}
