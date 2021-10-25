import { put, takeLatest } from "redux-saga/effects";
import { all, call } from "redux-saga/effects";
import userActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

export function* clearCartOnSignOut(){
    yield put(clearCart())
}


export function* onSignOutSucsess (){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}


export function* cartSagas(){
    yield all([call(onSignOutSucsess)])
}