import s from './FlightInfoCard.module.scss'

import { FlightInfo } from '../../../entities/tickets/model/types'
import { formatDate } from '../../helpers'

type Props = FlightInfo

export const FlightInfoCard = ({ airport, city, date, time }: Props) => {
  return (
    <div className={s.flightInfoCard}>
      <span className={s.time}>{time}</span>
      <span className={s.city}>{`${airport}, ${city}`}</span>
      <span className={s.data}>{formatDate(date)}</span>
    </div>
  )
}
