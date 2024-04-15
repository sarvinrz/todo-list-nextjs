import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setTodosFromLocalStorage: (state) => {
      const todosFromStorage = localStorage.getItem('todos');
      if (todosFromStorage) {
        state.todos = JSON.parse(todosFromStorage);
      }
    },
  },
});

export const { setTodo, toggleTodo, setTodosFromLocalStorage } =
  todoSlice.actions;
export default todoSlice.reducer;
