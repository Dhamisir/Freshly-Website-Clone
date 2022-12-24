import { ADD_REVIEW, GET_ALL_REVIEW, save_error_msg, msg_false, error_msg_false } from "./Review.actionType";

let initialState = {
    reviewData : [],
    addAndLoad : false,
    msg : false,
    error_msg : false
}

export const reviewReducer = (state = initialState, {type, payload}) =>{
  switch (type) {
    case ADD_REVIEW:
       return {
            ...state,
            addAndLoad : !state.addAndLoad,
            msg : payload
       }
       case error_msg_false:
        return {
            ...state,
            error_msg : false
        }
        case msg_false :
            return {
                ...state,
                msg : false
            }
       case GET_ALL_REVIEW:
        return {
            ...state,
            reviewData : payload
        }
        case save_error_msg:{
           return {...state,
            error_msg : payload}
        }
    default:
        return state;
  }
}
