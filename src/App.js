import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
//import './App.css';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'terminar curso intro a react', completed: false },
  { text: 'llorar con la llorona', completed: false }
];


function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        { todos.map( todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButtom />
    </>
  );
}

export default App;
