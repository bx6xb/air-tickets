import s from './TicketCard.module.scss'

import { TicketType } from '../../../../entities/tickets/model/types'
import { FlightInfoCard, getAirlineImage } from '../../../../shared'

type Props = { price: string } & Omit<TicketType, 'id' | 'price'>

export const TicketCard = ({
  airline,
  arrival,
  departure,
  flightTime,
  price,
  transfers,
}: Props) => {
  return (
    <div className={s.ticketCard}>
      <div className={s.airlineAndPrice}>
        <img alt={airline} className={s.airlineImage} src={getAirlineImage(airline)} />
        <button className={s.buy} type={'button'}>
          Купить
          <br /> за {price}
        </button>
      </div>
      <div className={s.flightInfo}>
        <FlightInfoCard {...departure} />
        <div className={s.transfers}>
          {!!transfers && <span className={s.transfersCount}>{transfers} пересадок</span>}
          <div className={s.line} />
          <span className={s.flightTime}>{flightTime}</span>
        </div>
        <FlightInfoCard {...arrival} />
      </div>
    </div>
  )
}
