import { CART_GET_SUCCESS } from "./cart.types"

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    console.log("data", payload, typeof payload, typeof [])
    switch (type) {
        case CART_GET_SUCCESS: {
            return {
                cart: payload
            }
        }
        default: {
            return state
        }
    }
}