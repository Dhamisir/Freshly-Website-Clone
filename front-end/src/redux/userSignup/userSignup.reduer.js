import { USER_SIGNUP, USER_SIGNUP_ERROR, USER_LOADING, ISACTIVE } from "./userSignup.type"

const initialState = {
    isAuth: false,
    isError: false,
    isLoading : false,
    isErrorMsg: "",
    isActive : false,
}

export const userSignupReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case USER_SIGNUP: {
            return {
                ...state,
                isAuth: true,
                isLoading : false,
                isError: false,
                isActive : true,              
            }
        }

        case USER_SIGNUP_ERROR: {
            return {
                ...state,
                isLoading : false,
                isError: true,
                isErrorMsg: payload,
                isAuth: false, 
                isActive : true,               
            }
        }

        case USER_LOADING : {
            return {
                ...state,
                isLoading : true
            }
        }

        case ISACTIVE :{
            return {
                ...state,
                isActive : false
            }
        }

        default: {
            return state
        }
    }
}