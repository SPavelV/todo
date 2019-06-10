import React from 'react'
import './item-add-form.css'
const ItemAddForm = ({addItem}) => {
  return (
    <div className="item-add-form">
      <button className="btn btn-outline-secondary" 
        onClick = {()=> addItem('Hello World!')}
        >add task</button>
    </div>
  )
}

export default ItemAddForm;