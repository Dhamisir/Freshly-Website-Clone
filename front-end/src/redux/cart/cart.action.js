import axios from "axios";
import { CART_GET_SUCCESS } from "./cart.types";

const mainUrl = process.env.REACT_APP_MAIN_URL;

// cartShow
const cartShow = (token) => (dispatch) => {
    // console.log("tolen", token)
    axios.post(`${mainUrl}/carts/get`, token)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: CART_GET_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
}

// cartAdd
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


// cartDelete
const cartDelete = (id, token) => (dispatch) => {
    // console.log(id, token)
    axios.delete(`${mainUrl}/carts/delete/${id}`)
        .then((res) => {
            console.log("success")
            dispatch(cartShow(token))
        })
        .catch((err) => {
            console.log("error")
        })
}

// cartUpdate
const cartUpdate = (id, token) => (dispatch) => {
    console.log(id, token)
    axios.patch(`${mainUrl}/carts/update/${id}`)
        .then((res) => {
            console.log("success")
            dispatch(cartShow(token))
        })
        .catch((err) => {
            console.log("error")
        })
}

// All Delete
const AllDelete = (token) => (dispatch) => {
    // console.log("alldelete", token)
    axios.post(`${mainUrl}/carts/userCartDelete`, token)
        .then((res) => {
            console.log("success")
            dispatch(cartShow(token))
        })
        .catch((err) => {
            console.log("error")
        })
}

export { cartShow, cartAdd, cartDelete, cartUpdate, AllDelete };