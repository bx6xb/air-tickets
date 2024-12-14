import { useTranslation } from 'react-i18next'

import s from './TicketCard.module.scss'

import { TicketType } from '../../../../entities/tickets/model/types'
import { FlightInfoCard, formatTransfrers, getAirlineImage } from '../../../../shared'

type Props = { price: string } & Omit<TicketType, 'id' | 'price'>

export const TicketCard = ({
  airline,
  arrival,
  departure,
  flightTime,
  price,
  transfers,
}: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.ticketCard}>
      <div className={s.airlineAndPrice}>
        <img alt={airline} className={s.airlineImage} src={getAirlineImage(airline)} />
        <button className={s.buy} type={'button'}>
          {t('TicketCard_buy')}
          <br /> {t('TicketCard_for')} {price}
        </button>
      </div>

      <div className={s.flightInfo}>
        <FlightInfoCard {...departure} />
        <div className={s.transfers}>
          {!!transfers && <span className={s.transfersCount}>{formatTransfrers(transfers)}</span>}
          <div className={s.line} />
          <span className={s.flightTime}>{flightTime}</span>
        </div>
        <FlightInfoCard {...arrival} />
      </div>
    </div>
  )
}
