import s from './Filter.module.scss'

import { setCurrency, setTransfersFilters } from '../../../entities'
import { Currencies, TransferFilterValues } from '../../../entities/tickets/model/types'
import { Checkbox, Tabs, useAppDispatch, useAppSelector } from '../../../shared'

export const Filter = () => {
  const currency = useAppSelector(state => state.ticketsSlice.currency)
  const transfersFilters = useAppSelector(state => state.ticketsSlice.transfersFilters)

  const dispatch = useAppDispatch()

  const onOptionClick = (option: string) => {
    dispatch(setCurrency(option as Currencies))
  }

  const setTransfersFiltersHandler = (value: TransferFilterValues) => {
    dispatch(setTransfersFilters(value))
  }

  return (
    <form className={s.filter}>
      <h3 className={s.filterName}>валюта</h3>
      <Tabs
        className={s.tabs}
        onOptionClick={onOptionClick}
        options={['rub', 'usd', 'eur']}
        selected={currency}
      />
      <h3 className={s.filterName}>количество пересадок</h3>
      <Checkbox
        checked={transfersFilters.includes('all')}
        label={'Все'}
        onCheckedChange={() => setTransfersFiltersHandler('all')}
      />
      <Checkbox
        checked={transfersFilters.includes(0)}
        label={'Без пересадок'}
        onCheckedChange={() => setTransfersFiltersHandler(0)}
      />
      <Checkbox
        checked={transfersFilters.includes(1)}
        label={'1 пересадка'}
        onCheckedChange={() => setTransfersFiltersHandler(1)}
      />
      <Checkbox
        checked={transfersFilters.includes(2)}
        label={'2 пересадки'}
        onCheckedChange={() => setTransfersFiltersHandler(2)}
      />
      <Checkbox
        checked={transfersFilters.includes(3)}
        label={'3 пересадки'}
        onCheckedChange={() => setTransfersFiltersHandler(3)}
      />
    </form>
  )
}
