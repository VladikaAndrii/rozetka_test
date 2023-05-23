import { createSlice } from "@reduxjs/toolkit"

export const basketReducer = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => {
      const existingCartItem = state.find((item) => item.id === payload.id)

      if (existingCartItem) {
        return state.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...state, { ...payload, quantity: 1 }]
    },
    removeItem: (state, { payload }) => {
      const existingCartItem = state.find((item) => item.id === payload.id)

      if (existingCartItem.quantity === 1) {
        return state.filter((cartItem) => cartItem.id !== payload.id)
      }

      if (existingCartItem) {
        return state.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    },
    setQuantity: (state, { payload }) => {
      const existingCartItem = state.find(
        (item) => item.id === payload.product.id
      )

      if (existingCartItem.quantity === 0) {
        return state.filter((item) => item.id !== payload.product.id)
      }

      return [...state, { ...payload.product, quantity: payload.quantity }]
    },
    clearItem: (state, { payload }) => {
      state.filter((item) => item.id !== payload.id)
    },
    clearBasket: (state) => {
      state = []
    },
  },
})

export const { addItem, removeItem, setQuantity, clearItem, clearBasket } =
  basketReducer.actions
export default basketReducer.reducer
