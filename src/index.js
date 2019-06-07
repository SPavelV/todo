import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import ToDoList from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'

import './index.css'

const todoData = [
  { id: 1, label: 'Drink Coffee', important: false },
  { id: 2, label: 'Make Awesome app', important: true },
  { id: 3, label: 'Have lunch', important: false }
]

const App = () => {

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>

      <ToDoList toDo={todoData}/>
    </div>
  )
}
  
ReactDOM.render(<App/>, document.getElementById('root'))