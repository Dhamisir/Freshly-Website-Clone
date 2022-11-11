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
const rootReducer = combineReducers({
  adminAuth: adminReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  product: productReducer,
  cartItems: cartReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
