import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/logo.svg" />
    </header>
  );
}
