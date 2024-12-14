import { useTranslation } from 'react-i18next'

import s from './TransfersCount.module.scss'

type Props = {
  transfersCount: number
}

export const TransfersCount = ({ transfersCount }: Props) => {
  const { i18n } = useTranslation()

  const transferText = i18n.t(transfersCount === 1 ? 'TicketCard_singular' : 'TicketCard_plural')

  return transfersCount ? (
    <span className={s.transfersCount}>{`${transfersCount} ${transferText}`}</span>
  ) : null
}
