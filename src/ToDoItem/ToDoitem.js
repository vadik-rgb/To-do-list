import React from "react";
import './ToDoitemStyle.css';

const ToDoItem = props => {
  const resolvedClass = {
    textDecoration : "line-through"
  }
  return(
    <div className = "mainItem">
      <div className='todoItem'> 
        <div className='description'> 
          <p style={props.completed === true ? resolvedClass : {}}>{props.description}</p>
        </div>
        <div className='input'>
          <input type = 'checkbox' 
            defaultChecked={props.completed}
            onChange = {props.handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ToDoItem;