import { USER_LOGIN,IS_LOADING,USER_LODING_FALSE, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";

const userToken = localStorage.getItem("userToken")
const initialState = {
    isAuth: !!userToken,
    token: userToken || "",
    isError: false,
    isErrormsg :null,
    isLoading: false
}

export const userLoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN: {
            localStorage.setItem("userToken", payload)
            return {
                ...state,
                isAuth: true,
                token: payload,
                isError: false,
                isLoading:false
            }
        }

        case USER_LODING_FALSE :{
            return {
                ...state,
                isError : false
            }
        }

        case IS_LOADING:{
             return {
                ...state,
                isLoading: true,
             }
        }
        case USER_LOGOUT: {
            localStorage.removeItem("userToken")
            return {
                ...state,
                isAuth: false,
                token: "",
                isError: false,
                isLoading:false
            }
        }

        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isError: true,
                isErrormsg: payload,
                isLoading:false
            }
        }

        default: {
            return state
        }
    }
}