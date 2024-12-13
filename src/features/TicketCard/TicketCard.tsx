import s from './TicketCard.module.scss'

import { TicketType } from '../../entities/tickets/model/types'
import { FlightInfoCard } from '../../shared'

type Props = TicketType

export const TicketCard = ({
  airline,
  arrival,
  departure,
  flightTime,
  price,
  transfers,
}: Props) => {
  const currency = 'rub'

  return (
    <div className={s.ticketCard}>
      <div className={s.airlineAndPrice}>
        <div className={s.airline}>{airline}</div>
        <button className={s.buy} type={'button'}>
          Купить за {price[currency]}
        </button>
      </div>
      <div className={s.flightInfo}>
        <FlightInfoCard {...departure} />
        <div className={s.transfers}>
          {transfers && <span className={s.transfersCount}>{transfers} пересадок</span>}
          <div className={s.line} />
          <span className={s.flightTime}>{flightTime}</span>
        </div>
        <FlightInfoCard {...arrival} />
      </div>
    </div>
  )
}
