import { createSlice } from "@reduxjs/toolkit";
import BookQueryService from "../services/BookQueryService";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        isAuthenticated: false,
        name: "",
        myLibrary: [],
    },
    reducers: {
        loginSuccess: (state, action ) => {
            state.isAuthenticated = true,
            state.name = action.payload.name
        },
        logout: (state, action ) => {
            state.isAuthenticated = false,
            state.name =""            
        },
        setBooks: (state, action ) => {
            state.myLibrary = action.payload
        },
        addBook: (state, action) => {
            state.myLibrary.push(action.payload);
        }
    }
})

export const { loginSuccess, logout, setBooks, addBook } = customerSlice.actions;
export default customerSlice.reducer

export const fetchBooks = () => async (dispatch) => {
    try {
        const response = await BookQueryService.searchByCustomerUsername();
        if (response) {
            dispatch(setBooks(response));
        }
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};