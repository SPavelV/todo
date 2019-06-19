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
    ],
    filter: 'done',
    term: ''
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

  toggleProperty = (arr, id, propName) => {
    return arr.map(element => {
      if(element.id === id) element[propName] = !element[propName]
      return element
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData:  this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData:  this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({term})
  }

  search = (items, term) => {
    if(term.length === 0) {
      return items
    }

    return items.filter( item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items
      case 'active': 
        return items.filter((item) => !item.done)
      case 'done': 
        return items.filter((item) => item.done)
      default: 
        return items 
    }
  }

  render() {
    const {todoData, term, filter} = this.state
    const visibleItems = this.filter(this.search(todoData, term), filter)
    const doneCount = todoData.filter(element => element.done === true).length
    const todoCount = todoData.length - doneCount

    return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={this.onSearchChange}/>
        <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
      </div>

      <ToDoList 
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        onDeleted = {this.deleteItem}
        toDo={visibleItems}/>
        <ItemAddForm addItem={this.addItem}/>
    </div>
  )}
}
