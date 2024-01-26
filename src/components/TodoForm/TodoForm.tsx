import React, { useState } from 'react';
import '../../App.css';
import { addTodo } from '../../redux/todoSlice';
import { useAppDispatch } from '../../app/hooks';

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        className="todo__input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit" className="todo__add-button">
        Add ToDo
      </button>
    </form>
  );
};
