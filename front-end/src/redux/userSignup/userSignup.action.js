import axios from "axios";
import { USER_SIGNUP, USER_SIGNUP_ERROR, USER_LOADING } from "./userSignup.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;

export const signupUser = (cred) => (dispatch) => {
      dispatch({type : USER_LOADING})
    // console.log(cred)
    let res = axios.post(`${mainUrl}/users/signup`, cred)
        .then((res) => {
            dispatch({ type: USER_SIGNUP });
        })
        .catch((err) => {
            // console.log("err", err.response.data.msg)
            
            dispatch({ type: USER_SIGNUP_ERROR, payload : err.response.data.msg })
        })
};
