import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailReducer, productListReducer } from "./reducers/productReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {cartReducer} from "./reducers/cartReducer"
const reducer = combineReducers({
  productList: productListReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  productDetail:productDetailReducer,
  cart:cartReducer,
});

const userInfoFromStorage=localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    :null

const cartItemsFromStorage=localStorage.getItem('cartItems')
  ?JSON.parse(localStorage.getItem('cartItems'))
  :[]

const initialState = {
  cart:{
    cartItems:cartItemsFromStorage,
  },
  userLogin:{userInfo:userInfoFromStorage},
  
};

const middlewears = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewears))
);

export default store;
