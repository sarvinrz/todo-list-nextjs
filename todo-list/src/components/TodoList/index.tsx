import { Todo } from '@/store/types';
import React from 'react';
import styles from './Todolist.module.css';
import { useTranslation } from 'react-i18next';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = function ({ todos, onToggleTodo }) {
  const { t } = useTranslation();

  return (
    <div className={styles.modal}>
      <p>New todo :</p>
      <table>
        <thead>
          <tr>
            <th>{t("Todo's")}</th>
            <th>{t('Status')}</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default React.memo(TodoList);
