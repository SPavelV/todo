import React from 'react'
import ToDoListItem from './todo-list-item'
const ToDoList = () => {
  const items = ['Drink coffee', 'Build Awesome to-do App']

  return (
    <ul>
      <li>
        <ToDoListItem/>
      </li>

      <li>
        <ToDoListItem/>
      </li>
      
    </ul>
  );
}

export default ToDoList;