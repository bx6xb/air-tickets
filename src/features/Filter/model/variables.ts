import { TransferFilterValues } from '../../../entities'

export const checkboxData: {
  label: string
  value: TransferFilterValues
}[] = [
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
