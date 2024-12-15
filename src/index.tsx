import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

/* eslint-disable sort-imports */

import { createRoot } from 'react-dom/client'

import '@fontsource/roboto'
import './shared/styles/styles.scss'

import { App } from './app/App'

createRoot(document.getElementById('root')!).render(<App />)
