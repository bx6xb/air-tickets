import { TicketType } from '../../entities/tickets/model/types'
import { TicketCard } from '../../features'
import { useAppSelector } from '../../shared'

export const TicketsPage = () => {
  const tickets = useAppSelector(state => state.ticketsSlice.tickets) as TicketType[]

  return (
    <div>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}
    </div>
  )
}
