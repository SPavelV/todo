import React from 'react'
import ToDoListItem from '../todo-list-item/'


import './todo-list.css'
const ToDoList = ({ toDo, onDeleted }) => {

  const elements = toDo.map((item) => {
    const {id, ...props} = item

    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem {...props}
          onDeleted={()=>onDeleted(id)}/>
      </li>
    )
  })

  return (
    <div className="inner-todo-list">
      <ul className="list-group-item todo-list">
        {elements}
      </ul>
    </div>
  );
}

export default ToDoList;