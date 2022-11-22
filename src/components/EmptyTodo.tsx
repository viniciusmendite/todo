import styles from './EmptyTodo.module.css';

export function EmptyTodo() {
  return (
    <div className={styles.container}>
      <img src="/src/assets/clipboard.svg" />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
