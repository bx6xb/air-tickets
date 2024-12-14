import { useTranslation } from 'react-i18next'

import s from './TicketsList.module.scss'

import { TransferFilterValues } from '../../../entities'
import { formatPrice, useAppSelector } from '../../../shared'
import { TicketCard } from './TicketCard'

export const TicketsList = () => {
  const { currency, tickets, transfersFilters } = useAppSelector(state => state.ticketsSlice)

  const { t } = useTranslation()

  const filteredTickets = tickets.filter(({ transfersCount }) =>
    transfersFilters.includes(transfersCount as TransferFilterValues)
  )

  return (
    <div className={s.ticketsList}>
      {filteredTickets.length ? (
        filteredTickets.map(({ id, price, ...rest }) => (
          <TicketCard key={id} {...rest} price={formatPrice(price, currency)} />
        ))
      ) : (
        <h2>{t('TicketsList_nothing_to_show')}</h2>
      )}
    </div>
  )
}
