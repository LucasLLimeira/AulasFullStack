import { atom } from 'recoil'
import type { Task } from '../types'

export const tasksAtom = atom<Task[]>({
  key: 'tasksAtom',
  default: [],
})
