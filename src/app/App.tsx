import s from './App.module.scss'

import { TicketsPage } from '../pages'
import { Header } from '../widgets'
import { Providers } from './Providers'

export const App = () => {
  return (
    <Providers>
      <div className={s.app}>
        <Header />
        <TicketsPage />
      </div>
    </Providers>
  )
}
