import { Currency, PriceInCurrencies } from '../../entities/tickets/model/types'

export const formatPrice = (price: PriceInCurrencies, currency: Currency) => {
  let currencySymbol = '₽'

  if (currency === 'eur') {
    currencySymbol = '€'
  } else if (currency === 'usd') {
    currencySymbol = '$'
  }

  const string = price[currency].toString()

  return string.slice(0, 2) + ' ' + string.slice(2) + currencySymbol
}
