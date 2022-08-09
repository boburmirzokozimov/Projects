import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    info: '',
    about: '',
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addText(state, action) {
            state.text = action.payload
        },
        addInfo(state, action) {
            state.info = action.payload
        },
        addAbout(state, action) {
            state.about = action.payload
        }
    }
})

export const { addAbout, addInfo, addText } = infoSlice.actions

export default infoSlice.reducer