import { CART_ADD_SUCCESS, CART_GET_SUCCESS } from "./cart.types"

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
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