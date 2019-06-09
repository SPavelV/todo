import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel/'
import ToDoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './index.css'

const todoData = [
  { id: 1, label: 'Drink Coffee'},
  { id: 2, label: 'Make Awesome app'},
  { id: 3, label: 'Have lunch'}
]

const App = () => {

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>

      <ToDoList 
        onDeleted = {(id)=>console.log('del: ', id)}
        toDo={todoData}/>
    </div>
  )
}

export default App