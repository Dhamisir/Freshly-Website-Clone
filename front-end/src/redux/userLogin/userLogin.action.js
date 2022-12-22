import axios from "axios";
import { USER_LOGIN, USER_LOGIN_ERROR, IS_LOADING, USER_LOGOUT, USER_LODING_FALSE } from "./userLogin.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const userLogin = (cred) => (dispatch) => {
    // console.log(cred)
    dispatch({type: IS_LOADING})
    let res = axios.post(`${mainUrl}/users/login`, cred)
        .then((res) => {
            // console.log("token", res.data.token)
            dispatch({ type: USER_LOGIN, payload: res.data.token });
        })
        .catch((err) => {
            
            dispatch({ type: USER_LOGIN_ERROR, payload : err.response.data.msg })
        });
        // dispatch({type : USER_LODING_FALSE})
};
export const userLogout = () => ({ type: USER_LOGOUT });
