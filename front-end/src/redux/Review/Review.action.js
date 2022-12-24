import axios from "axios";
import { ADD_REVIEW, GET_ALL_REVIEW, save_error_msg } from "./Review.actionType";
const mainUrl = process.env.REACT_APP_MAIN_URL; 

export const get_all_reviewData = (productId) => async (dispatch) =>{
    try {
        let {data} = await axios.get(`${mainUrl}/review/${productId}`);
       
        dispatch({type : GET_ALL_REVIEW, payload : data});
    } catch (error) {
        console.log(error.msg)
    }
}

export const add_reviewData = (sendData) => async (dispatch) =>{
    try {
       let {data} = await axios.post(`${mainUrl}/review`, sendData);
       dispatch({type : ADD_REVIEW, payload : data.msg});
    } catch (error) {
        dispatch({type : save_error_msg, payload : error.msg});
    }
}