import React from 'react'
import ReactDOM from 'react-dom'

const ToDOList = () => {
  const items = ['Drink coffee', 'Build Awesome to-do App']

  return (
    <ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
      </ul>
  )
}

const AppHeader = () => {
  return (
    <h1>My to-do list.</h1>
  )
}

const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '25px'
  }
  return <input 
              placeholder={searchText} 
              style = {searchStyle}
              disabled
              type="text"/>
}

const App = () => {

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ToDOList/>
    </div>
  )
}
  
ReactDOM.render(<App/>, document.getElementById('root'))