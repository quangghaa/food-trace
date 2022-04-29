import { createSlice } from '@reduxjs/toolkit';

export const traceSlice = createSlice({
    name: 'trace',
    initialState: {
        id: '',
        name: '',
        start: '',
        end: '',
        event: '',
        lot: 0,
        pallet: 0,
        serial: 0
    },
    reducers: {
        updateId: (state, action) => {
            state.id = action.payload
        },
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateStart: (state, action) => {
            state.start = action.payload
        },
        updateEnd: (state, action) => {
            state.end = action.payload
        },
        updateEvent: (state, action) => {
            state.event = action.payload
        },
        updateLot: (state, action) => {
            state.lot = action.payload
        },
        updatePallet: (state, action) => {
            state.pallet = action.payload
        },
        updateSerial: (state, action) => {
            state.serial = action.payload
        },
        clear: (state) => {
            state.id = ''
            state.name = ''
            state. start = ''
            state.end = ''
            state.event = ''
            state.lot = 0
            state.pallet = 0
            state.serial = 0
        }

    }
})

export const { updateTrace, updateId, updateName, updateStart, updateEnd, updateEvent, updateLot, updatePallet, updateSerial, clear } = traceSlice.actions

export default traceSlice.reducer