import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { TodoInfo } from './components/TodoInfo';
import { EmptyTodo } from './components/EmptyTodo';
import { Todo } from './components/Todo';

interface TodoList {
  id: number;
  isDone: boolean;
  content: string;
}

function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [todo, setTodo] = useState('');

  function handleAddTodo(event: FormEvent) {
    event.preventDefault();

    if (todo === '') {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      isDone: false,
      content: todo
    };

    setTodoList([newTodo, ...todoList]);
    setTodo('');
  }

  function handleDoneTodo(todoId: number) {
    const findTodo = todoList.find(item => item.id === todoId);

    const newTodoList = todoList.filter(item => item.id !== todoId);

    if (!findTodo) {
      return;
    }

    const newTodo = {
      id: todoId,
      content: findTodo.content,
      isDone: true,
    };

    setTodoList([...newTodoList, newTodo]);
  }

  function handleDeleteTodo(todoId: Number) {
    const todoListFiltered = todoList.filter(item => item.id !== todoId);

    setTodoList(todoListFiltered);
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleAddTodo}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />

          <button type="submit" disabled={!todo}>
            Criar
            <PlusCircle />
          </button>
        </form>

        <section>
          <TodoInfo
            createdTasks={todoList.length}
            doneTasks={todoList.filter(todo => todo.isDone).length}
          />

          {!todoList.length && <EmptyTodo />}

          {!!todoList.length && (
            <>
              {todoList.map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDoneTodo={todoId => handleDoneTodo(todoId)}
                  onDeleteTodo={todoId => handleDeleteTodo(todoId)}
                />
              ))}
            </>
          )}

        </section>
      </main>
    </>
  )
}

export default App
