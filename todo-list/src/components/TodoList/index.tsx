import { Todo } from '@/store/types';
import React from 'react';
import styles from './Todolist.module.css';
import { useTranslation } from 'react-i18next';
import { MdOutlineAutoDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/store/features/todoSlice';
import { TodoFilterEnumType } from '@/layouts/ContentLayout';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = function ({ todos, onToggleTodo }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onDeleteButtonClicked = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div>
          <p>{t('New todo:')}</p>
        </div>
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.status}>{t('Status')}</th>
                <th className={styles.todos}>{t("Todo's")}</th>
                <th className={styles.delete}>{t('Delete')}</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>
                    <input
                      type='checkbox'
                      checked={todo.completed}
                      onChange={() => onToggleTodo(todo.id)}
                    />
                  </td>
                  <td>{todo.text}</td>
                  <td>
                    {/* TODO: extract this function call to a handler */}
                    <button onClick={() => onDeleteButtonClicked(todo.id)}>
                      <MdOutlineAutoDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoList);
