import axios from "axios";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGOUT } from "./userLogin.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const userLogin = (cred) => (dispatch) => {
    console.log(cred)
    let res = axios.post(`${mainUrl}/users/login`, cred)
        .then((res) => {
            // console.log("token", res.data.token)
            dispatch({ type: USER_LOGIN, payload: res.data.token });
        })
        .catch(() => {
            dispatch({ type: USER_LOGIN_ERROR })
        })
};
export const userLogout = () => ({ type: USER_LOGOUT });
