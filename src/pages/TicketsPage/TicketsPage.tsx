import s from './TicketsPage.module.scss'

import { Filter, TicketsList } from '../../features'
import { Container } from '../../shared'

export const TicketsPage = () => {
  return (
    <Container className={s.ticketsPage}>
      <Filter />
      <TicketsList />
    </Container>
  )
}
