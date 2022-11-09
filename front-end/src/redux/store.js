// {
//   /* only use store.js file when you working ... remove all code before push or commit  */
// }
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "../redux/adminLogin/adminLogin.reducer";

const rootReducer = combineReducers({
  adminAuth: adminReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
