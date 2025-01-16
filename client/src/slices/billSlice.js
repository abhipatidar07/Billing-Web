// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     billData: localStorage.getItem("billData") ? JSON.parse(localStorage.getItem("billData")) : null,
//     loading: false,
// };

// const billSlice = createSlice({
//     name:"bill",
//     initialState: initialState,
//     reducers:{
//         setBillData: (state,action)=>{
//             console.log("setBillData called with payload:", action.payload);
//             state.billData = action.payload
//             localStorage.setItem("billData", JSON.stringify(action.payload));
//         },
//         setLoading(state,value){
//             state.loading = value.payload
//         },
//     }, 
// });

// export const { setBillData, setLoading} = billSlice.actions;

// export default billSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    billData: localStorage.getItem('billData') ? JSON.parse(localStorage.getItem('billData')) : null,
    allBill: localStorage.getItem('allBill') ? JSON.parse(localStorage.getItem('allBill')) : null,
    loading: false,
};

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        setBillData: (state, action) => {
            console.log('setBillData called with payload:', action.payload);
            state.billData = action.payload;
            localStorage.setItem('billData', JSON.stringify(action.payload));
        },
        setAllBill: (state, action) => {
            console.log('AllBills called with payload:', action.payload);
            state.billData = action.payload;
            localStorage.setItem('allBill', JSON.stringify(action.payload));
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },

        
    },
});

export const { setBillData, setLoading, setAllBill } = billSlice.actions;

export default billSlice.reducer;
