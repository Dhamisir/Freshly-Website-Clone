import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT_PAGE_DECRIMANT,
  ADMIN_PRODUCT_PAGE_INCREMANT,
  ADMIN_SHOW_PRODUCT,
  Is_Loading
} from "./AdminShowProduct.type";

const initialValue = {
  adminProduct: [],
  page: 1,
  isLoading : false,
};
export const adminShowProductReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_SHOW_PRODUCT: {
      return {
        ...state,
        adminProduct: payload,
        isLoading : false,
      };
    }
    case Is_Loading :{
      return {
        ...state,
        isLoading : true
      }
    }
    case ADMIN_PRODUCT_PAGE_INCREMANT:
      return {
        ...state,
        page: state.page + 1,
        isLoading : false,
      };
    case ADMIN_PRODUCT_PAGE_DECRIMANT:
      return {
        ...state,
        page: state.page - 1,
        isLoading : false,
      };
    case ADMIN_DELETE_PRODUCT: {
      return {
        ...state,
        adminProduct: payload,
        isLoading : false,
      };
    }
    default:
      return state;
  }
};
