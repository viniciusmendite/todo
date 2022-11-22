import styles from './TodoInfo.module.css';

interface TodoInfoProps {
  createdTasks: number;
  doneTasks: number;
}

export function TodoInfo({ createdTasks, doneTasks }: TodoInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.createdTasks}>
        <span>Tarefas criadas</span>
        <span>{createdTasks}</span>
      </div>

      <div className={styles.doneTasks}>
        <span>Concluídas</span>
        {doneTasks === 0 && <span>{doneTasks}</span>}
        {doneTasks > 0 && <span>{doneTasks} de {createdTasks}</span>}
      </div>
    </div>
  );
}
