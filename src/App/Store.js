import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Future/Reducer";
 

export default store = configureStore({
    reducer : todoSlice
})