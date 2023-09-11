import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {baseRTKQuery} from "../../api/config/baseRTKQuery";
import {booksDataReducer} from "../../../entities/Book/module/store";


export const rootReducer = combineReducers({
    booksDataReducer,
    [baseRTKQuery.reducerPath]: baseRTKQuery.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseRTKQuery.middleware)
    })
}



export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]