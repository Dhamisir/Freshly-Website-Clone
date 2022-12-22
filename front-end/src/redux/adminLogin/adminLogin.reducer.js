import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ISLoding
} from "./adminLogin.type";

const token = localStorage.getItem("AdminToken");
const initialValue = {
  isAuth: !!token,
  token: token,
  data: [],
  error: false,
  isErrorMsg : null,
  isLoading : false,
};

export const adminReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN: {
      localStorage.setItem("AdminToken", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload,
        data: payload.admin,
        error: false,
        isLoading : false,
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        token: payload,
        isErrorMsg : payload,
        data: [],
        error: true,
        isLoading : false
      };
    }
    case ISLoding :{
      return {
        ...state,
        isLoading : true,
      }
    }
    case ADMIN_LOGOUT: {
      localStorage.removeItem("AdminToken");
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading : false
      };
    }
    default:
      return state;
  }
};
