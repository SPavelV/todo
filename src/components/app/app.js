import React,{Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './index.css'

export default class App extends Component{
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
    </div>
  )}
}
