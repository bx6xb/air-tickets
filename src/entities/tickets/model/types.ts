export type TicketsState = {
  error: null | string
  isTicketsLoading: boolean
  tickets: Ticket[]
}

export type Ticket = {
  airline: string
  arrival: {
    airport: string
    city: string
    date: string
    time: string
  }
  departure: {
    airport: string
    city: string
    date: string
    time: string
  }
  flightTime: string
  price: {
    eur: number
    rub: number
    usd: number
  }
  transfers: number
}
