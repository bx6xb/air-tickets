import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import { i18n } from '../../shared'
import { store } from '../store'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
  )
}
