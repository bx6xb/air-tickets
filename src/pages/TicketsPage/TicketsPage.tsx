import s from './TicketsPage.module.scss'

import { TicketCard } from '../../features'
import { formatPrice, useAppSelector } from '../../shared'

export const TicketsPage = () => {
  const { currency, tickets } = useAppSelector(state => state.ticketsSlice)

  return (
    <div className={s.ticketsPage}>
      <div className={s.tickets}>
        {tickets.map(({ id, price, ...rest }) => (
          <TicketCard key={id} {...rest} price={formatPrice(price, currency)} />
        ))}
      </div>
    </div>
  )
}
