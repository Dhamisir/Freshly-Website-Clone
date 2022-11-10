// {
//   /* only use store.js file when you working ... remove all code before push or commit  */
// }
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "../redux/adminLogin/adminLogin.reducer";
import { userLoginReducer } from "./userLogin/userLogin.reduer";
import { userSignupReducer } from "./userSignup/userSignup.reduer";

const rootReducer = combineReducers({
  adminAuth: adminReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
