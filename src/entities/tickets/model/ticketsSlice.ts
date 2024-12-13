import { createSlice } from '@reduxjs/toolkit'

import ticketsData from '../../../shared/lib/tickets.json'
import { TicketType, TicketsState } from './types'

const initialState: TicketsState = {
  error: null,
  isTicketsLoading: false,
  tickets: ticketsData as TicketType[],
}

export const ticketsSlice = createSlice({
  initialState,
  name: 'ticketsSlice',
  reducers: {},
})
