import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types/Todo';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const text = action.payload;
      if (text.trim() !== '') {
        const newTodo: Todo = {
          id: uuidv4(),
          text: text,
          completed: false,
        };
        state.todos.push(newTodo);
      }
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    },
    
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },

    editTodo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
