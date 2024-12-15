import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import s from './FilterWrapper.module.scss'

type Props = {
  children: ReactNode
  header: string
}

export const FilterWrapper = ({ children, header }: Props) => {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className={s.filterName}>{t(header)}</h3>
      {children}
    </div>
  )
}
