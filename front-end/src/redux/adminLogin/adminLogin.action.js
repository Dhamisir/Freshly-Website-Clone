import axios from "axios";
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT,
  ISLoding
} from "./adminLogin.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const adminLogin = (cred) => async (dispatch) => {
  dispatch({type : ISLoding})
  try {
    let res = await axios.post(`${mainUrl}/admin/login`, cred);
    console.log(res.data)
    dispatch({ type: ADMIN_LOGIN, payload: res.data });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_ERROR });
  }
};
export const adminLogout = () => ({ type: ADMIN_LOGOUT });
