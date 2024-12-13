import { createRoot } from 'react-dom/client'

import { App } from './app/App'
import { Providers } from './app/Providers'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>
)
