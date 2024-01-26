import React, { useState } from 'react';
import { toggleComplete, deleteTodo, editTodo } from '../../redux/todoSlice';
import { FaRegCircle, FaCheckCircle, FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import '../../App.css';
import { Todo } from '../../types/Todo';
import { useAppDispatch } from '../../app/hooks';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    dispatch(editTodo({ id: todo.id, newText: editedText }));
    setIsEditing(false);
  };

  return (
    <div className="todo__item-wrapper" key={todo.id}>
      <li className={`todo__item ${todo.completed ? 'completed' : ''}`}>
        <div
          className="todo__icon"
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {todo.completed ? (
            <FaCheckCircle className="todo__check-icon" />
          ) : (
            <FaRegCircle className="todo__uncheck-icon" />
          )}
        </div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="todo__edit-input"
            />
            <FaSave className="todo__edit-icon" onClick={handleEditSave} />
          </>
        ) : (
          <>
            <p className="todo__text">{todo.text}</p>
            <div className="todo__button-wrapper">
              <FaEdit className="todo__edit-icon" onClick={handleEditToggle} />
              <FaTrash
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="todo__delete-icon"
              />
            </div>
          </>
        )}
      </li>
    </div>
  );
};
