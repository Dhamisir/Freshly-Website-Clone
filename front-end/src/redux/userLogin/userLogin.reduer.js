import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";

const userToken = localStorage.getItem("userToken")
const initialState = {
    isAuth: !!userToken,
    token: userToken || "",
    isError: false
}

export const userLoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN: {
            localStorage.setItem("userToken", payload)
            return {
                ...state,
                isAuth: true,
                token: payload,
                isError: false
            }
        }

        case USER_LOGOUT: {
            localStorage.removeItem("userToken")
            return {
                ...state,
                isAuth: false,
                token: "",
                isError: false
            }
        }

        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        default: {
            return state
        }
    }
}