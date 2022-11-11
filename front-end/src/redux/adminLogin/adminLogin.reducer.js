import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./adminLogin.type";

const token = localStorage.getItem("AdminToken");
const initialValue = {
  isAuth: !!token,
  token: token,
  data: [],
  error: false,
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
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        token: payload,
        data: [],
        error: true,
      };
    }
    case ADMIN_LOGOUT: {
      localStorage.removeItem("AdminToken");
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    default:
      return state;
  }
};
