import s from './FlightInfoCard.module.scss'

import { FlightInfo } from '../../../entities/tickets/model/types'

type Props = FlightInfo

export const FlightInfoCard = ({ airport, city, date, time }: Props) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
    year: 'numeric',
  })

  return (
    <div className={s.flightInfoCard}>
      <span className={s.time}>{time}</span>
      <span className={s.city}>{`${airport}, ${city}`}</span>
      <span className={s.data}>{formattedDate}</span>
    </div>
  )
}
