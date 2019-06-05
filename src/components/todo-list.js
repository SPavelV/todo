import React from 'react'
import ToDoListItem from './todo-list-item'
const ToDoList = () => {

  return (
    <ul>
      
      <li>
        <ToDoListItem label="Build React app"/>
      </li>

      <li>
        <ToDoListItem label="Drink coffee" important/>
      </li>

    </ul>
  );
}

export default ToDoList;