import { SortBy, TransferFilterValues } from '../../../entities'
import { Variable } from './types'

export const transfresCountCheckboxData: Variable<TransferFilterValues> = [
  {
    label: 'Filter_all_options',
    value: 'all',
  },
  {
    label: 'Filter_without_transfers',
    value: 0,
  },
  {
    label: 'Filter_one_transfer',
    value: 1,
  },
  {
    label: 'Filter_two_transfers',
    value: 2,
  },
  {
    label: 'Filter_three_transfers',
    value: 3,
  },
]

export const sortByCheckboxData: Variable<SortBy> = [
  {
    label: 'Filter_sort_by_price',
    value: 'price',
  },
  {
    label: 'Filter_sort_by_transfers_count',
    value: 'transfersCount',
  },
  {
    label: 'Filter_sort_by_date',
    value: 'date',
  },
]
