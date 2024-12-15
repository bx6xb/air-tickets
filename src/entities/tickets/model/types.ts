export type TicketsState = {
  currency: Currencies
  sortBy: SortBy
  tickets: TicketType[]
  transfersFilters: TransferFilterValues[]
}

export type TransferFilterValues = 'all' | 0 | 1 | 2 | 3

export type SortBy = 'date' | 'price' | 'transfersCount'

export type Currencies = 'eur' | 'rub' | 'usd'

export type PriceInCurrencies = {
  eur: number
  rub: number
  usd: number
}

export type TicketType = {
  airline: string
  arrival: FlightInfo
  departure: FlightInfo
  flightTime: number
  id: string
  price: PriceInCurrencies
  transfersCount: number
}

export type FlightInfo = {
  airport: string
  city: string
  date: string
  time: string
}
