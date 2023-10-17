import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    jwt :'',
};
const authSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{}
})
export default authSlice.reducer;