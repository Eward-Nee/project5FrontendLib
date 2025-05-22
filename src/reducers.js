import { createSlice } from "@reduxjs/toolkit";

const TimerSlice = createSlice({
    name: "timer",
    initialState: {
        sessionNumber: 25,
        breakNumber: 5,
        isSession: true
    },
    reducers: {
        incSession(state) {
            state.sessionNumber += 1
        },
        decSession(state) {
            state.sessionNumber -= 1
        },

        incBreak(state) {
            state.breakNumber += 1
        },

        decBreak(state) {
            state.breakNumber -= 1
        },

        changeifSession(state) {
            state.isSession = !state.isSession
        },

        resetAll(state) {
            state.breakNumber = 5
            state.isSession = true
            state.sessionNumber = 25
        },

        resetSessionNumber(state, action) {
            state.sessionNumber = action.payload
        },

        resetBreakNumber(state, action) {
            state.breakNumber = action.payload
        }
    },
})

export const actionTimer = TimerSlice.actions

export default {
    timer: TimerSlice.reducer
}