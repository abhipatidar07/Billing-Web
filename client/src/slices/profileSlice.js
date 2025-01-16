import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileData: localStorage.getItem("profileData") ? JSON.parse(localStorage.getItem("profileData")) : null,
    loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers:{
        setProfileData: (state,action)=>{
            console.log("setprofileData called with payload:", action.payload);
            state.profileData = action.payload
            localStorage.setItem("profileData", JSON.stringify(action.payload));
        },
        setLoading(state,value){
            state.loading = value.payload
        },
    }, 
});

export const { setProfileData, setLoading} = profileSlice.actions;

export default profileSlice.reducer;