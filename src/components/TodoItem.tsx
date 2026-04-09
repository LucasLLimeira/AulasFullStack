import { useSetRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'
import type { Task } from '../types'

interface TodoItemProps {
  task: Task
}

export function TodoItem({ task }: TodoItemProps) {
  const setTasks = useSetRecoilState(tasksAtom)

  function toggleTask() {
    setTasks((currentTasks) =>
      currentTasks.map((currentTask) =>
        currentTask.id === task.id
          ? { ...currentTask, completed: !currentTask.completed }
          : currentTask,
      ),
    )
  }

  function removeTask() {
    setTasks((currentTasks) =>
      currentTasks.filter((currentTask) => currentTask.id !== task.id),
    )
  }

  return (
    <li className={`todo-item ${task.completed ? 'todo-item--done' : ''}`}>
      <span className="todo-item__text">{task.text}</span>

      <div className="todo-item__actions">
        <button className="complete" onClick={toggleTask} type="button">
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>
        <button className="remove" onClick={removeTask} type="button">
          Remover
        </button>
      </div>
    </li>
  )
}
