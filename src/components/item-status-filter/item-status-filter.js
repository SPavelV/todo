import React, {Component} from 'react'

import './item-status-filter.css'

class ItemStatusFilter extends Component {

  state = {
    dataBtn: [
      {label:'All'},
      {label:'Active'},
      {label: 'Done'}
    ],
    activeBtn: 'All'
  }

  clickButtonHendler = (evt) => {
    const textButton = evt.target.textContent;
    this.setState({activeBtn: textButton})
    this.props.toggleFilter(textButton)
  }

  getButtons = () => {
    const {dataBtn, activeBtn} = this.state
    
    return dataBtn.map(element => {
      const cssClass = element.label === activeBtn ? 'btn btn-info' : 'btn btn-outline-secondary'
      return (
        <button key={element.label}
                type="button"
                onClick={this.clickButtonHendler}
                className={cssClass}>{element.label}</button>
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