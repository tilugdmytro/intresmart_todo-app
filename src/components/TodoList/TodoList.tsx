import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state: any) => state.todos.todos);

  return (
    <ul className="todo__list">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
