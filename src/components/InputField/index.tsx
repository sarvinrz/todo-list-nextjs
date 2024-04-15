import { RootState } from '@/store';
import {
  setTodo,
  setTodosFromLocalStorage,
  toggleTodo,
} from '@/store/features/todoSlice';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './InputField.module.css';
import TodoList from '../TodoList';
import AddButton from '../AddButton';
import { TodoFilterEnumType } from '@/layouts/ContentLayout';

interface InputFieldProps {
  selectedFilter: TodoFilterEnumType;
}

const InputFiled: React.FC<InputFieldProps> = function ({ selectedFilter }) {
  const text = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const { t } = useTranslation();

  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddButtonClicked();
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id)); // Dispatch toggleTodo action with the todo id
  };

  const filteredTodos = useMemo(() => {
    switch (selectedFilter) {
      case TodoFilterEnumType.ALL:
        return text;
      case TodoFilterEnumType.CHECKED:
        return text.filter((t) => t.completed);
      case TodoFilterEnumType.UNCHECKED:
        return text.filter((t) => !t.completed);
      default:
        return text;
    }
  }, [text, selectedFilter]);

  const onAddButtonClicked = () => {
    if (inputValue.trim() !== '') {
      dispatch(setTodo(inputValue.trim())); //dispatch input in addTodo action
      setOpen(true);
      setInputValue('');
    }
  };

  useEffect(() => {
    //focus the text filed when component mounts
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
    dispatch(setTodosFromLocalStorage()); // Load todos from local storage
  }, [dispatch]);

  return (
    <div>
      <div className={styles.inputField}>
        <h2>{t("Add todo's:")}</h2>
        <input
          ref={textFieldRef}
          type='text'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <AddButton onAddButtonClicked={onAddButtonClicked} />
      </div>
      {open && (
        <TodoList todos={filteredTodos} onToggleTodo={handleToggleTodo} />
      )}
    </div>
  );
};

export default InputFiled;
