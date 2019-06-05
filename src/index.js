import React from 'react'
import ReactDOM from 'react-dom'

import ToDoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel';

const App = () => {

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ToDoList/>
    </div>
  )
}
  
ReactDOM.render(<App/>, document.getElementById('root'))