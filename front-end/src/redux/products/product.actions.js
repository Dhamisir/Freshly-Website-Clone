import axios from "axios"
import { GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from "./product.types"
const mainUrl = process.env.REACT_APP_MAIN_URL; 

export const getproducts=() =>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
try{
    let res = await axios.get(`${mainUrl}/products/get`)
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    return res.data
}catch(e){
    dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
}

}