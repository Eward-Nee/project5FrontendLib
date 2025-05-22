import { configureStore } from "@reduxjs/toolkit";
import rc from "./reducers"


const store = configureStore({
    reducer: {
        timer: rc.timer
    }
})

export default store