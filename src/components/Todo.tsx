import { Check, Trash } from 'phosphor-react';

import styles from './Todo.module.css';

interface TodoProps {
  todo: {
    id: number;
    content: string;
    isDone: boolean;
  };
  onDoneTodo: (todoID: number) => void;
  onDeleteTodo: (todoID: number) => void;
}

export function Todo({ todo, onDoneTodo, onDeleteTodo }: TodoProps) {
  function handleDoneTodo() {
    onDoneTodo(todo.id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  return (
    <div className={todo.isDone ? styles.containerChecked : styles.container}>
      <button
        type="button"
        onClick={handleDoneTodo}
        className={todo.isDone ? styles.checked : styles.check}
        disabled={todo.isDone}
      >
        {todo.isDone && <Check />}
      </button>

      <p>{todo.content}</p>

      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDeleteTodo}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
