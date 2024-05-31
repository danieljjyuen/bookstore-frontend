import { configureStore } from "@reduxjs/toolkit"
import customerReducer from "../reducer/customerReducer"
const store = configureStore({
    reducer: {
        customer: customerReducer,
    }
})

export default store