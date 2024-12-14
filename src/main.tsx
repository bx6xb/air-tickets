import { createRoot } from 'react-dom/client'

import './shared/styles/styles.scss'
import '@fontsource/roboto'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { App } from './app/App'
import { Providers } from './app/Providers'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
