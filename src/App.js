import React, {useState} from 'react';
import { Button, FormControl, InputLabel, Input, List } from '@material-ui/core';
import Todo from './components/Todo/Todo.js';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = event => {
    event.preventDefault();
    // if (input) {
    setTodos([...todos, input]);
    setInput('');
    // }
  }

  return (
    <div className="App">
      <h1>TODO App</h1>
      <FormControl>
        <InputLabel>Write todos here</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add
      </Button>
      <List className="todo-list">
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </List>
    </div>
  );
}

export default App;
