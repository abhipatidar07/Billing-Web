import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupdata: null,
    loading: false,
    // token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setSignupData: (state,action)=>{
            console.log("setSignupData called with payload:", action.payload);
            state.signupdata = action.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        },
        // setToken(state,value){
        //     {console.log(action.payload)}
        //     state.token = value.payload
        // },
        setToken: (state, action) => {
            // console.log("setToken called with payload:", action.payload); // Debug log
            state.token = action.payload; // Update token in state
          },
    }, 
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;