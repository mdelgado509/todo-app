import React from 'react';
import './Todo.css';
import { ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
  return (
    <div>
      <ListItem>
        <ListItemText className="todo" primary={props.text}/>
      </ListItem>
    </div>
  )
}

export default Todo;
