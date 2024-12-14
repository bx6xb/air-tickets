import s from './App.module.scss'

import { TicketsPage } from '../pages'
import { Header } from '../widgets'

export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <TicketsPage />
    </div>
  )
}
