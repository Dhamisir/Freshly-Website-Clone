import axios from "axios";
import { CART_GET_SUCCESS } from "./cart.types";

const mainUrl = process.env.REACT_APP_MAIN_URL;
const cartShow = (token) => (dispatch) => {
    console.log("tolen", token)
    axios.post(`${mainUrl}/carts/get`, token)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: CART_GET_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
}

const cartAdd = (data) => (dispatch) => {
    axios.post(`${mainUrl}/carts/add`, data)
        .then((res) => {
            console.log("success", data.token)
            dispatch(cartShow({ token: data.token }))
        })
        .catch((err) => {
            console.log(err)
        })
}

const cartDelete = (id, token) => (dispatch) => {
    console.log(id, token)
    axios.delete(`${mainUrl}/carts/delete/${id}`)
        .then((res) => {
            console.log("success")
        })
        .catch((err) => {
            console.log("error")
        })
}

export { cartShow, cartAdd, cartDelete };