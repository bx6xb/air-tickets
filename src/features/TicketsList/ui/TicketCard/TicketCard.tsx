import { useTranslation } from 'react-i18next'

import s from './TicketCard.module.scss'

import { TicketType } from '../../../../entities'
import { FlightInfoCard } from '../../../../shared'
import { AirlineImage } from './AirlineImage'
import { TransfersCount } from './TransfersCount'

type Props = { price: string } & Omit<TicketType, 'id' | 'price'>

export const TicketCard = ({
  airline,
  arrival,
  departure,
  flightTime,
  price,
  transfersCount,
}: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.ticketCard}>
      <div className={s.airlineAndPrice}>
        <AirlineImage airline={airline} />

        <button className={s.buy} type={'button'}>
          {t('TicketCard_buy')}
          <br /> {t('TicketCard_for')} {price}
        </button>
      </div>

      <div className={s.flightInfo}>
        <FlightInfoCard {...departure} />

        <div className={s.transfers}>
          <TransfersCount transfersCount={transfersCount} />
          <div className={s.line} />
          <span className={s.flightTime}>{flightTime + t('TicketCard_time')}</span>
        </div>

        <FlightInfoCard {...arrival} />
      </div>
    </div>
  )
}
