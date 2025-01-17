import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
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
        setUser: (state,action)=>{
            console.log("setSignupData called with payload:", action.payload);
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload));
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

export const { setSignupData, setLoading, setToken,setUser } = authSlice.actions;

export default authSlice.reducer;