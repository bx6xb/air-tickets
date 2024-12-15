import { useTranslation } from 'react-i18next'

import s from './TicketsList.module.scss'

import { TransferFilterValues } from '../../../entities'
import { formatPrice, useAppSelector } from '../../../shared'
import { TicketCard } from './TicketCard'

export const TicketsList = () => {
  const { currency, sortBy, tickets, transfersFilters } = useAppSelector(
    state => state.ticketsSlice
  )

  const { t } = useTranslation()

  const filteredAndSortedTickets = tickets
    .filter(({ transfersCount }) =>
      transfersFilters.includes(transfersCount as TransferFilterValues)
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price[currency] - b.price[currency]
      } else if (sortBy === 'transfersCount') {
        return a.transfersCount - b.transfersCount
      } else {
        return new Date(a.departure.date).getTime() - new Date(b.departure.date).getTime()
      }
    })

  return (
    <div className={s.ticketsList}>
      {filteredAndSortedTickets.length ? (
        filteredAndSortedTickets.map(({ id, price, ...rest }) => (
          <TicketCard key={id} {...rest} price={formatPrice(price, currency)} />
        ))
      ) : (
        <h2>{t('TicketsList_nothing_to_show')}</h2>
      )}
    </div>
  )
}
