// {
//   /* only use store.js file when you working ... remove all code before push or commit  */
// }
import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "../redux/adminLogin/adminLogin.reducer";
import { userLoginReducer } from "./userLogin/userLogin.reduer";
import { userSignupReducer } from "./userSignup/userSignup.reduer";
import { productReducer } from "./products/product.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { adminAddProductReducer } from "./AdminAddProduct/adminAddProduct.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/AdminShowProduct.reducer";
import { adminShowAllUserReducer } from "./AdminShowUser/AdminShowUser.reducer";
import { reviewReducer } from "./Review/Review.reducer";
const rootReducer = combineReducers({
  adminAuth: adminReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  product: productReducer,
  cartItems: cartReducer,
  adminAddProduct:adminAddProductReducer,
  adminShowProduct:adminShowProductReducer,
  adminShowUser:adminShowAllUserReducer,
  reviewReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
