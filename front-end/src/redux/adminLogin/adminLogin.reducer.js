import { ADMIN_LOGIN, ADMIN_LOGOUT } from "./adminLogin.type";

const initialValue = {
  isAuth: false,
  token: "",
  data: [],
};

export const adminReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN: {
      return {
        ...state,
        isAuth: true,
        token: payload,
        data: payload.admin,
      };
    }
    case ADMIN_LOGOUT: {
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
