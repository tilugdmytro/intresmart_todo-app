import React from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="todo__container">
      <h1 className="todo__header">ToDo App</h1>
      <div className="todo__form-wrapper">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
