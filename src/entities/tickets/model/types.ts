export type TicketsState = {
  currency: Currencies
  tickets: TicketType[]
  transfersFilters: TransferFilterValues[]
}

export type TransferFilterValues = 'all' | 0 | 1 | 2 | 3

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
  flightTime: string
  id: string
  price: PriceInCurrencies
  transfers: number
}

export type FlightInfo = {
  airport: string
  city: string
  date: string
  time: string
}
