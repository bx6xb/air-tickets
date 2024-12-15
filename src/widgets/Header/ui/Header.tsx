import { useTranslation } from 'react-i18next'

import s from './Header.module.scss'

import { Container, Select } from '../../../shared'

export const Header = () => {
  const { i18n, t } = useTranslation()

  const language = i18n.language

  const options = [
    { label: t('Header_ru'), value: 'ru' },
    { label: t('Header_eng'), value: 'en' },
  ]

  const onOptionChange = (option: string) => {
    i18n.changeLanguage(option)
  }

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.logo}>
          <img alt={'logo'} src={'images/logo.png'} /> Air Tickets
        </div>

        <Select
          name={'language'}
          onOptionChange={onOptionChange}
          options={options}
          value={language}
        />
      </Container>
    </header>
  )
}
