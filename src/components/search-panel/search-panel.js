import React from 'react'
import './search-panel.css'

const SearchPanel = ({searchItem}) => {
  const searchText = 'Type here to search'

  const inputHandler = (evt) => {
    searchItem(evt.target.value)
  }
 
  return <input
              onChange={inputHandler}
              className="form-control search-input"
              placeholder={searchText} 
              type="text"/>
}

export default SearchPanel