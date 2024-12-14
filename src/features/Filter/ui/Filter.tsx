import s from './Filter.module.scss'

import { setCurrency } from '../../../entities'
import { Currencies } from '../../../entities/tickets/model/types'
import { Tabs, useAppDispatch, useAppSelector } from '../../../shared'

export const Filter = () => {
  const currency = useAppSelector(state => state.ticketsSlice.currency)
  const dispatch = useAppDispatch()

  const onOptionClick = (option: string) => {
    dispatch(setCurrency(option as Currencies))
  }

  return (
    <div className={s.filter}>
      <h3 className={s.filterName}>валюта</h3>
      <Tabs onOptionClick={onOptionClick} options={['rub', 'usd', 'eur']} selected={currency} />
    </div>
  )
}
