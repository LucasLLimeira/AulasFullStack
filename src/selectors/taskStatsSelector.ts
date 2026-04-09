import { selector } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

export const taskStatsSelector = selector({
  key: 'taskStatsSelector',
  get: ({ get }) => {
    const tasks = get(tasksAtom)
    const done = tasks.filter((task) => task.completed).length

    return {
      total: tasks.length,
      done,
      pending: tasks.length - done,
    }
  },
})
