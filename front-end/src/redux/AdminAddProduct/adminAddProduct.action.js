import axios from "axios";
import { ADMIN_ADD_PRODUCT } from "./adminAddProduct.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem("AdminToken");
export const adminAddP = (data) => async (dispatch) => {
  let cred = { token, ...data };
  // data.token = token;
  console.log("not", cred);
  try {
    let res = await axios.post(`${mainUrl}/products/post`, cred);
    dispatch({ type: ADMIN_ADD_PRODUCT, payload: res.data });
    // console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error.masseg);
  }
};
