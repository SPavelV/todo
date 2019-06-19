import React from 'react'
import './search-panel.css'

class SearchPanel extends React.Component {

  state = {
    term: ''
  }

  inputHandler = (evt) => {
    const term = evt.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }
 
  render() {
    

    return <input
      onChange={this.inputHandler}
      className="form-control search-input"
      placeholder="Input search task" 
      type="text"/>
  }
  
}

export default SearchPanel