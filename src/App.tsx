import { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { tasksAtom } from './atoms/tasksAtom'
import { taskStatsSelector } from './selectors/taskStatsSelector'
import { TodoForm } from './components/TodoForm'
import { TodoFilters } from './components/TodoFilters'
import { TodoList } from './components/TodoList'

const STORAGE_KEY = 'todo-list-recoil:tasks'

function App() {
  const [tasks, setTasks] = useRecoilState(tasksAtom)
  const stats = useRecoilValue(taskStatsSelector)
  const hydratedRef = useRef(false)

  useEffect(() => {
    try {
      const rawTasks = localStorage.getItem(STORAGE_KEY)

      if (!rawTasks) {
        hydratedRef.current = true
        return
      }

      const parsedTasks = JSON.parse(rawTasks)

      if (Array.isArray(parsedTasks)) {
        setTasks(parsedTasks)
      }
    } catch {
      // Fallback silencioso para lista vazia se houver dados inválidos no localStorage.
      setTasks([])
    } finally {
      hydratedRef.current = true
    }
  }, [setTasks])

  useEffect(() => {
    if (!hydratedRef.current) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  return (
    <main className="app">
      <header className="app__header">
        <h1>To-do List com Recoil</h1>
        <p>Adicione, conclua, filtre e remova tarefas com estado global.</p>
      </header>

      <section className="card">
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </section>

      <footer className="stats" aria-live="polite">
        <span>Total: {stats.total}</span>
        <span>Concluidas: {stats.done}</span>
        <span>Pendentes: {stats.pending}</span>
      </footer>
    </main>
  )
}

export default App
