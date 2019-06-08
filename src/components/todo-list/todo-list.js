import React from 'react'
import ToDoListItem from '../todo-list-item/'
import './todo-list.css'
const ToDoList = ({ toDo }) => {

  const elements = toDo.map((item) => {
    const {id, ...props} = item

    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem {...props}/>
      </li>
    )
  })

  return (
    <ul className="list-group-item todo-list">
      {elements}
    </ul>
  );
}

export default ToDoList;