import { Currencies, PriceInCurrencies } from '../../entities'

export const formatPrice = (price: PriceInCurrencies, currency: Currencies) => {
  let currencySymbol = '₽'

  if (currency === 'eur') {
    currencySymbol = '€'
  } else if (currency === 'usd') {
    currencySymbol = '$'
  }

  let priceString = price[currency].toString()

  if (priceString.length > 3) {
    priceString = priceString.slice(0, 2) + ' ' + priceString.slice(2)
  }

  return priceString + currencySymbol
}
