import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import billReducer from "../slices/billSlice"


const rootReducer  = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    bill: billReducer,
})

export default rootReducer