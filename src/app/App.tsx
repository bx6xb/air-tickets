import { Ticket } from '../entities'
import { useAppSelector } from '../shared'

export const App = () => {
  const tickets = useAppSelector(state => state.ticketsSlice.tickets) as Ticket[]

  return (
    <div>
      {tickets.map((ticket, index) => (
        <div key={index}>
          <p>Airline: {ticket.airline}</p>
          <p>
            Price: {ticket.price?.rub} RUB / {ticket.price?.usd} USD
          </p>
          <p>
            Departure: {ticket.departure?.city} at {ticket.departure?.time}
          </p>
          <p>
            Arrival: {ticket.arrival?.city} at {ticket.arrival?.time}
          </p>
          <p>Flight Time: {ticket.flightTime}</p>
          <p>Transfers: {ticket.transfers}</p>
        </div>
      ))}
    </div>
  )
}
