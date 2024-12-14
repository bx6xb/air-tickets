import { i18n } from '../config'

export const formatTransfrers = (transfersCount: number): string => {
  return `${transfersCount} ${i18n.t(
    transfersCount === 1 ? 'TicketCard_singular' : 'TicketCard_plural'
  )}`
}
