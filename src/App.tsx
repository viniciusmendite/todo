import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.form}>
          <input
            placeholder="Adicione uma nova tarefa"
          />

          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>
      </main>
    </>
  )
}

export default App
