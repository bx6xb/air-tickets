import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

import { i18n } from '../../shared'
import { store } from '../store'

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>{children}</BrowserRouter>
      </I18nextProvider>
    </Provider>
  )
}
