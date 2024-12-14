import s from './Filter.module.scss'

import { Checkbox, Tabs } from '../../../shared'
import { useFilter } from '../hooks'
import { checkboxData } from '../model'

export const Filter = () => {
  const { currency, onCurrencyChange, setTransfersFiltersHandler, t, transfersFilters } =
    useFilter()

  return (
    <div className={s.filter}>
      <form>
        <h3 className={s.filterName}>{t('Filter_currency')}</h3>
        <Tabs
          className={s.tabs}
          onOptionChange={onCurrencyChange}
          options={['rub', 'usd', 'eur']}
          selected={currency}
        />

        <h3 className={s.filterName}>{t('Filter_transfers_count')}</h3>
        {checkboxData.map(({ label, value }) => (
          <Checkbox
            checked={transfersFilters.includes(value)}
            key={value}
            label={t(label)}
            onCheckedChange={() => setTransfersFiltersHandler(value)}
          />
        ))}
      </form>
    </div>
  )
}
