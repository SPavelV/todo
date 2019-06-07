import React from 'react'
import './search-panel.css'

const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '25px'
  }
  return <input
              className="form-control search-input"
              placeholder={searchText} 
              style = {searchStyle}
              type="text"/>
}

export default SearchPanel