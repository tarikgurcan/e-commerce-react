import {combineReducers} from "redux"
import cartReducer from "./cart/cart-reducers"
import storage from "redux-persist/lib/storage"
import userReducer from "./user/user-reducer"
import persistReducer from "redux-persist/es/persistReducer"
import { directoryReducer } from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"

const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
}

const rootReducer=combineReducers({
    user:userReducer,
    directory:directoryReducer,
    cart:cartReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);