import { combineReducers, configureStore } from "@reduxjs/toolkit"
import basketReducer from "./features/basketSlice"
import productsReducer from "./features/productsSlice"

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
