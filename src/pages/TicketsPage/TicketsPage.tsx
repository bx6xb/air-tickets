import s from './TicketsPage.module.scss'

import { Filter, TicketsList } from '../../features'

export const TicketsPage = () => {
  return (
    <div className={s.ticketsPage}>
      <Filter />
      <TicketsList />
    </div>
  )
}
