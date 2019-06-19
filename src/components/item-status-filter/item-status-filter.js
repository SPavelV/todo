import React, {Component} from 'react'

import './item-status-filter.css'

class ItemStatusFilter extends Component {

  dataBtn =  [
    {name:'all',label: 'All'},
    {name:'active', label: 'Active'},
    {name:'done', label: 'Done'}
  ]

  getButtons = () => {
    const {filter, onFilterChange} = this.props
    
    return this.dataBtn.map(({name,label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button key={name}
                type="button"
                onClick={()=>onFilterChange(name)}
                className={`btn ${clazz}`}>{label}</button>
      )
    })
  }

  render() {
    
    return (
      <div className="btn-group">
        {this.getButtons()}
      </div>
    )
  }
}


export default ItemStatusFilter;