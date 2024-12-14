import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ticketsData from '../../../shared/lib/tickets.json'
import { Currencies, TicketType, TicketsState } from './types'

const initialState: TicketsState = {
  currency: 'rub',
  tickets: ticketsData as TicketType[],
}

export const ticketsSlice = createSlice({
  initialState,
  name: 'ticketsSlice',
  reducers: {
    setCurrency(state, action: PayloadAction<Currencies>) {
      state.currency = action.payload
    },
  },
})

export const { setCurrency } = ticketsSlice.actions
