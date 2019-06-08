import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

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

export default App