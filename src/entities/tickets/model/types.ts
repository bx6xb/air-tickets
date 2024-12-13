export type TicketsState = {
  error: null | string
  isTicketsLoading: boolean
  tickets: TicketType[]
}

export type TicketType = {
  airline: string
  arrival: FlightInfo
  departure: FlightInfo
  flightTime: string
  id: string
  price: {
    eur: number
    rub: number
    usd: number
  }
  transfers: number
}

export type FlightInfo = {
  airport: string
  city: string
  date: string
  time: string
}
