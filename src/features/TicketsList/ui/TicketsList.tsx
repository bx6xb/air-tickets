import s from './TicketsList.module.scss'

import { TransferFilterValues } from '../../../entities/tickets/model/types'
import { formatPrice, useAppSelector } from '../../../shared'
import { TicketCard } from './TicketCard'

export const TicketsList = () => {
  const { currency, tickets, transfersFilters } = useAppSelector(state => state.ticketsSlice)

  const filteredTickets = tickets.filter(({ transfers }) =>
    transfersFilters.includes(transfers as TransferFilterValues)
  )

  return (
    <div className={s.tickets}>
      {filteredTickets.length ? (
        filteredTickets.map(({ id, price, ...rest }) => (
          <TicketCard key={id} {...rest} price={formatPrice(price, currency)} />
        ))
      ) : (
        <h2>Nothing to show</h2>
      )}
    </div>
  )
}
