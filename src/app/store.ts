import { configureStore } from '@reduxjs/toolkit'

import { ticketsSlice } from '../entities'

export const store = configureStore({
  reducer: {
    [ticketsSlice.name]: ticketsSlice.reducer,
  },
})
