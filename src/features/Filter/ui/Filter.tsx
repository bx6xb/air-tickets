import { useTranslation } from 'react-i18next'

import s from './Filter.module.scss'

import { setCurrency, setTransfersFilters } from '../../../entities'
import { Currencies, TransferFilterValues } from '../../../entities/tickets/model/types'
import { Checkbox, Tabs, useAppDispatch, useAppSelector } from '../../../shared'

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
        <Checkbox
          checked={transfersFilters.includes('all')}
          label={t('Filter_all_options')}
          onCheckedChange={() => setTransfersFiltersHandler('all')}
        />
        <Checkbox
          checked={transfersFilters.includes(0)}
          label={t('Filter_without_transfers')}
          onCheckedChange={() => setTransfersFiltersHandler(0)}
        />
        <Checkbox
          checked={transfersFilters.includes(1)}
          label={t('Filter_one_transfer')}
          onCheckedChange={() => setTransfersFiltersHandler(1)}
        />
        <Checkbox
          checked={transfersFilters.includes(2)}
          label={t('Filter_two_transfers')}
          onCheckedChange={() => setTransfersFiltersHandler(2)}
        />
        <Checkbox
          checked={transfersFilters.includes(3)}
          label={t('Filter_three_transfers')}
          onCheckedChange={() => setTransfersFiltersHandler(3)}
        />
      </form>
    </div>
  )
}
