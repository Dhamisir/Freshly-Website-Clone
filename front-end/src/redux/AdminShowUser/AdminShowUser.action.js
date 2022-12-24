import axios from "axios";
import {
  ADMIN_DELETE_USER,
  ADMIN_GET_ALL_USER,
  ADMIN_USER_PAGE_DECREMENT,
  ADMIN_USER_PAGE_INCREMANT,
} from "./AdminShowUser.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;
///users/allUser?page=1
export const getAllUser = (page) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/users/allUser?page=${page}`);
    dispatch({ type: ADMIN_GET_ALL_USER, payload: res.data });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    // console.log(id)
    let res = await axios.delete(`${mainUrl}/users/delete/${id}`);
    dispatch({ type: ADMIN_DELETE_USER, payload: res.data });
    // console.log(res.data);
    // return res.data;
  } catch (error) {
    console.log(error.masseg);
  }
};

export const incrementUser = () => ({ type: ADMIN_USER_PAGE_INCREMANT });
export const decrmeentUser = () => ({ type: ADMIN_USER_PAGE_DECREMENT });
