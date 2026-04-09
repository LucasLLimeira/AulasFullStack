import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

export function TodoForm() {
  const [text, setText] = useState('')
  const setTasks = useSetRecoilState(tasksAtom)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedText = text.trim()
    if (!normalizedText) return

    setTasks((currentTasks) => [
      {
        id: crypto.randomUUID(),
        text: normalizedText,
        completed: false,
      },
      ...currentTasks,
    ])

    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input" className="sr-only">
        Nova tarefa
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
