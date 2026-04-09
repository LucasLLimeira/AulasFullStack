import { useRecoilValue } from 'recoil'
import { filteredTasksSelector } from '../selectors/filteredTasksSelector'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const filteredTasks = useRecoilValue(filteredTasksSelector)

  if (filteredTasks.length === 0) {
    return <p className="todo-empty">Nenhuma tarefa encontrada para esse filtro.</p>
  }

  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
