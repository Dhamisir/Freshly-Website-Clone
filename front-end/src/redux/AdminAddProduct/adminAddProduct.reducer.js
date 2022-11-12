import { ADMIN_ADD_PRODUCT } from "./adminAddProduct.type";

const initialValue = {
  productData: {},
};
export const adminAddProductReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_ADD_PRODUCT: {
      return {
        ...state,
        productData: payload,
      };
    }
    default:
      return state;
  }
};
