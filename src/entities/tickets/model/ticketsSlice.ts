import { createSlice } from '@reduxjs/toolkit'

import ticketsData from '../../../public/tickets.json'
import { Ticket, TicketsState } from './types'

const initialState: TicketsState = {
  error: null,
  isTicketsLoading: false,
  tickets: ticketsData as Ticket[],
}

export const ticketsSlice = createSlice({
  initialState,
  name: 'ticketsSlice',
  reducers: {},
})
