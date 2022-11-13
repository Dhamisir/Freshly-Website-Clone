import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT_PAGE_DECRIMANT,
  ADMIN_PRODUCT_PAGE_INCREMANT,
  ADMIN_SHOW_PRODUCT,
} from "./AdminShowProduct.type";

const initialValue = {
  adminProduct: [],
  page: 1,
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
      };
    }
    case ADMIN_PRODUCT_PAGE_INCREMANT:
      return {
        ...state,
        page: state.page + 1,
      };
    case ADMIN_PRODUCT_PAGE_DECRIMANT:
      return {
        ...state,
        page: state.page - 1,
      };
    case ADMIN_DELETE_PRODUCT: {
      return {
        ...state,
        adminProduct: payload,
      };
    }
    default:
      return state;
  }
};
