import { USER_SIGNUP, USER_SIGNUP_ERROR } from "./userSignup.type"

const initialState = {
    isAuth: false,
    isError: false,
    isErrorMsg: ""
}

export const userSignupReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNUP: {
            return {
                ...state,
                isAuth: true,
                isError: false
            }
        }

        case USER_SIGNUP_ERROR: {
            return {
                ...state,
                isError: true,
                isErrorMsg: payload,
                isAuth: false
            }
        }

        default: {
            return state
        }
    }
}