import { createRoot } from 'react-dom/client'

import '@fontsource/roboto'
import './shared/styles/styles.scss'

import { App } from './app/App'
import { Providers } from './app/Providers'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
