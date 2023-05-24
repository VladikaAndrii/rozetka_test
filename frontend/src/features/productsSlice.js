import { createSlice } from "@reduxjs/toolkit"

export const productsReducer = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, { payload }) => (state = [...payload]),
  },
})

export const { setProducts } = productsReducer.actions
export default productsReducer.reducer
