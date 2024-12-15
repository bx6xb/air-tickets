import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import ticketsData from './tickets.json'
import { Currencies, SortBy, TicketType, TicketsState, TransferFilterValues } from './types'

const initialState: TicketsState = {
  currency: 'rub',
  sortBy: 'price',
  tickets: ticketsData as TicketType[],
  transfersFilters: [0, 1, 2, 3, 'all'],
}

export const ticketsSlice = createSlice({
  initialState,
  name: 'ticketsSlice',
  reducers: {
    setCurrency(state, action: PayloadAction<Currencies>) {
      state.currency = action.payload
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload
    },
    setTransfersFilters(
      state,
      action: PayloadAction<TransferFilterValues | TransferFilterValues[]>
    ) {
      const filter = action.payload

      if (Array.isArray(filter)) {
        state.transfersFilters = filter
      } else {
        const transfersFilters = state.transfersFilters

        if (transfersFilters.includes(filter)) {
          state.transfersFilters = transfersFilters.filter(v => v !== filter && v !== 'all')
        } else if (filter === 'all') {
          state.transfersFilters = [0, 1, 2, 3, 'all']
        } else {
          state.transfersFilters.push(filter)
        }
      }
    },
  },
})

export const { setCurrency, setSortBy, setTransfersFilters } = ticketsSlice.actions
