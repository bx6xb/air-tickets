import s from './Filter.module.scss'

import { Tabs } from '../../../shared'
import { useFilter } from '../hooks'
import { sortByCheckboxData, transfresCountCheckboxData } from '../model'
import { CheckboxFilter } from './CheckboxFilter'
import { FilterWrapper } from './FilterWrapper'

export const Filter = () => {
  const {
    currency,
    onCurrencyChange,
    setSortByHandler,
    setTransfersFiltersHandler,
    sortBy,
    t,
    transfersFilters,
  } = useFilter()

  return (
    <div className={s.filter}>
      <form className={s.form}>
        <FilterWrapper header={'Filter_currency'}>
          <Tabs
            onOptionChange={onCurrencyChange}
            options={['rub', 'usd', 'eur']}
            selected={currency}
          />
        </FilterWrapper>

        <FilterWrapper header={'Filter_sort_by'}>
          <CheckboxFilter
            callback={setTransfersFiltersHandler}
            checkboxData={transfresCountCheckboxData}
            condition={value => transfersFilters.includes(value)}
          />
        </FilterWrapper>

        <FilterWrapper header={'Filter_sort_by'}>
          <CheckboxFilter
            callback={setSortByHandler}
            checkboxData={sortByCheckboxData}
            condition={value => sortBy === value}
          />
        </FilterWrapper>
      </form>
    </div>
  )
}
