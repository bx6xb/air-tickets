import { useTranslation } from 'react-i18next'

import s from './Filter.module.scss'

import {
  Currencies,
  TransferFilterValues,
  setCurrency,
  setTransfersFilters,
} from '../../../entities'
import { Checkbox, Tabs, useAppDispatch, useAppSelector } from '../../../shared'
import { checkboxData } from './variables'

export const Filter = () => {
  const currency = useAppSelector(state => state.ticketsSlice.currency)
  const transfersFilters = useAppSelector(state => state.ticketsSlice.transfersFilters)

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const onOptionClick = (option: string) => {
    dispatch(setCurrency(option as Currencies))
  }

  const setTransfersFiltersHandler = (value: TransferFilterValues) => {
    dispatch(setTransfersFilters(value))
  }

  const mappedCheckboxData = checkboxData.map(({ label, value }) => (
    <Checkbox
      checked={transfersFilters.includes(value)}
      key={value}
      label={t(label)}
      onCheckedChange={() => setTransfersFiltersHandler(value)}
    />
  ))

  return (
    <div className={s.filter}>
      <form>
        <h3 className={s.filterName}>{t('Filter_currency')}</h3>
        <Tabs
          className={s.tabs}
          onOptionClick={onOptionClick}
          options={['rub', 'usd', 'eur']}
          selected={currency}
        />
        <h3 className={s.filterName}>{t('Filter_transfers_count')}</h3>
        {mappedCheckboxData}
      </form>
    </div>
  )
}
