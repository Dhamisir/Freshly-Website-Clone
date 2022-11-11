import { GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from "./product.types"


const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState,action) => {
  switch(action.type){
    case GET_PRODUCTS_LOADING:{
      return{
        ...state,
        loading:true,
        error:false,
        data:[]
      }

    } case GET_PRODUCTS_SUCCESS:{
        return{
        ...state,
        loading:false,
        error:false,
        data:action.payload
      }
    } case GET_PRODUCTS_ERROR:{
      return{
        ...state,
        loading:false,
        error:true,
        data:[]
      }
    }
  }
  return state;
};
