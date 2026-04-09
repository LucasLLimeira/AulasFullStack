export type FilterType = 'all' | 'done' | 'pending'

export interface Task {
  id: string
  text: string
  completed: boolean
}
