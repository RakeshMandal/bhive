import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedSeat : null

};

const seatSlice = createSlice({
    name: 'seats',
    initialState,
    reducers:{
        selectSeat: (state, action)=>{
            state.selectedSeat = action.payload
        }
    }
});

export const {selectSeat} = seatSlice.actions
export default seatSlice.reducer