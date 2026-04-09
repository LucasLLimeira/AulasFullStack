import { atom } from 'recoil'
import type { FilterType } from '../types'

export const filterAtom = atom<FilterType>({
  key: 'filterAtom',
  default: 'all',
})
