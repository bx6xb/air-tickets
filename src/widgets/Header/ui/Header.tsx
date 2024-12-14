import { useTranslation } from 'react-i18next'

import s from './Header.module.scss'

import { Container, Select } from '../../../shared'
import logo from '../../../shared/images/logo.png'

export const Header = () => {
  const { i18n, t } = useTranslation()

  const onOptionChange = (option: string) => {
    i18n.changeLanguage(option)
  }

  const options = [
    { label: t('Header_ru'), value: 'ru' },
    { label: t('Header_eng'), value: 'en' },
  ]

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.logo}>
          <img alt={'logo'} src={logo} /> Air Tickets
        </div>

        <Select name={'language'} onOptionChange={onOptionChange} options={options} />
      </Container>
    </header>
  )
}
