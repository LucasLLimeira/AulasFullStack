import { useRecoilState } from 'recoil'
import { filterAtom } from '../atoms/filterAtom'
import type { FilterType } from '../types'

const FILTER_OPTIONS: { label: string; value: FilterType }[] = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluidas', value: 'done' },
  { label: 'Pendentes', value: 'pending' },
]

export function TodoFilters() {
  const [currentFilter, setCurrentFilter] = useRecoilState(filterAtom)

  return (
    <div className="todo-filters">
      {FILTER_OPTIONS.map((filterOption) => (
        <button
          key={filterOption.value}
          className={currentFilter === filterOption.value ? 'active' : ''}
          onClick={() => setCurrentFilter(filterOption.value)}
          type="button"
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  )
}
