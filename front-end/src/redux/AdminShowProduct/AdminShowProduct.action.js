import axios from "axios";
import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT_PAGE_DECRIMANT,
  ADMIN_PRODUCT_PAGE_INCREMANT,
  ADMIN_SHOW_PRODUCT,
} from "./AdminShowProduct.type";

const mainUrl = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem("AdminToken");

// get Product

export const adminShowProduct = (page) => async (dispatch) => {
  let cred = { token };
  console.log(cred);
  try {
    let res = await axios.post(
      `${mainUrl}/products/get/admin?page=${page}`,
      cred
    );
    dispatch({ type: ADMIN_SHOW_PRODUCT, payload: res.data });
    // console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error.masseg);
  }
};

// delete Product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/products/delete/${id}`);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.masseg);
  }
};

// page

export const increment = () => ({ type: ADMIN_PRODUCT_PAGE_INCREMANT });
export const decrmeent = () => ({ type: ADMIN_PRODUCT_PAGE_DECRIMANT });
