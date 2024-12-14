import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router'

import {
  Currencies,
  TransferFilterValues,
  setCurrency,
  setTransfersFilters,
} from '../../../entities'
import { useAppDispatch, useAppSelector } from '../../../shared'

export const useFilter = () => {
  const currency = useAppSelector(state => state.ticketsSlice.currency)
  const transfersFilters = useAppSelector(state => state.ticketsSlice.transfersFilters)

  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()

  const { t } = useTranslation()

  useEffect(() => {
    const currencyParam = searchParams.get('currency')
    const transfersFiltersParam = searchParams.get('transfersFilters')

    if (currencyParam) {
      dispatch(setCurrency(currencyParam as Currencies))
    }

    if (transfersFiltersParam) {
      const value = transfersFiltersParam.split(',').map(v => (isNaN(+v) ? v : +v))

      dispatch(setTransfersFilters(value as TransferFilterValues[]))
    }
  }, [])

  useEffect(() => {
    const transfersFiltersValue = transfersFilters.toString()

    setSearchParams({
      currency,
      transfersFilters: transfersFiltersValue,
    })
  }, [transfersFilters, currency, setSearchParams])

  const onCurrencyChange = (option: string) => {
    dispatch(setCurrency(option as Currencies))
  }

  const setTransfersFiltersHandler = (value: TransferFilterValues) => {
    dispatch(setTransfersFilters(value))
  }

  return { currency, onCurrencyChange, setTransfersFiltersHandler, t, transfersFilters }
}
