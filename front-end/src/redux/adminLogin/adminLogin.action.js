import axios from "axios";
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT,
} from "./adminLogin.type";

export const adminLogin = (cred) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/admin/login", cred);
    dispatch({ type: ADMIN_LOGIN, payload: res.data });
    console.log(res.data);
    return res.data;
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_ERROR });
  }
};
export const adminLogout = () => ({ type: ADMIN_LOGOUT });
