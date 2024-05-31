import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        isAuthenticated: false,
        name: ""
    },
    reducers: {
        loginSuccess: (state, action ) => {
            state.isAuthenticated = true,
            state.name = action.payload.name
        },
        logout: (state, action ) => {
            state.isAuthenticated = false,
            state.name =""            
        }
    }
})

export const { loginSuccess, logout } = customerSlice.actions;
export default customerSlice.reducer