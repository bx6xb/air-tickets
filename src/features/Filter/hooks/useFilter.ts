import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router'

import {
  Currencies,
  SortBy,
  TransferFilterValues,
  setCurrency,
  setSortBy,
  setTransfersFilters,
} from '../../../entities'
import { useAppDispatch, useAppSelector } from '../../../shared'

export const useFilter = () => {
  const currency = useAppSelector(state => state.ticketsSlice.currency)
  const transfersFilters = useAppSelector(state => state.ticketsSlice.transfersFilters)
  const sortBy = useAppSelector(state => state.ticketsSlice.sortBy)

  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()

  const { t } = useTranslation()

  useEffect(() => {
    const currencyParam = searchParams.get('currency')
    const transfersFiltersParam = searchParams.get('transfersFilters')
    const sortbByParam = searchParams.get('sortBy')

    if (currencyParam) {
      dispatch(setCurrency(currencyParam as Currencies))
    }

    if (transfersFiltersParam) {
      const value = transfersFiltersParam.split(',').map(v => (isNaN(+v) ? v : +v))

      dispatch(setTransfersFilters(value as TransferFilterValues[]))
    }

    if (sortbByParam) {
      dispatch(setSortBy(sortbByParam as SortBy))
    }
  }, [dispatch, searchParams])

  useEffect(() => {
    const transfersFiltersValue = transfersFilters.toString()

    setSearchParams({
      currency,
      sortBy,
      transfersFilters: transfersFiltersValue,
    })
  }, [transfersFilters, currency, sortBy, setSearchParams])

  const onCurrencyChange = (option: string) => {
    dispatch(setCurrency(option as Currencies))
  }

  const setTransfersFiltersHandler = (value: TransferFilterValues) => {
    dispatch(setTransfersFilters(value))
  }

  const setSortByHandler = (value: SortBy) => {
    dispatch(setSortBy(value))
  }

  return {
    currency,
    onCurrencyChange,
    setSortByHandler,
    setTransfersFiltersHandler,
    sortBy,
    t,
    transfersFilters,
  }
}
