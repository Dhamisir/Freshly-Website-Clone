import axios from "axios"
import { GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE , GET_ERROR } from "./product.types"
const mainUrl = process.env.REACT_APP_MAIN_URL; 

export const getproducts=(page) =>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
try{
    let res = await axios.get(`${mainUrl}/products/get?page=${page}`)
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    return res.data
}catch(e){
    dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
}

}


export const singleGet=(id) =>async(dispatch)=>{
    
try{
    let res = await axios.get(`${mainUrl}/products/singleGet/${id}`)
    dispatch({type:GET_SINGLE,payload:res.data})
    return res.data
}catch(e){
    dispatch({type:GET_ERROR,payload:e.message})
}

}

