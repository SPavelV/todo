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
    isSearch: false,
    filter: 'All'
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

  search = (todoData, value, propName) => {
    return todoData.filter(element => {
      return element[propName].toUpperCase().search(value.toUpperCase()) !==-1
    })
  }

  searchItem = (value) => {
    if(!value) {
      this.setState({isSearch: false});
      return
    }
    this.setState(({todoData}) => {
      return {
        todoSearchData: this.search(todoData, value, 'label'),
        isSearch: true
      }
    })
  }

  toggleFilter = (value) => {
    // console.log('---value:',value);
  
  }

  render() {

    const {todoData} = this.state;
    const doneCount = todoData.filter(element => element.done === true).length
    const todoCount = todoData.length - doneCount;

    const dataList = this.state.isSearch ? this.state.todoSearchData : todoData

    return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel searchItem={this.searchItem}/>
        <ItemStatusFilter toggleFilter={this.toggleFilter}/>
      </div>

      <ToDoList 
        onToggleImportant = {this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        onDeleted = {this.deleteItem}
        toDo={dataList}/>
        <ItemAddForm addItem={this.addItem}/>
    </div>
  )}
}
