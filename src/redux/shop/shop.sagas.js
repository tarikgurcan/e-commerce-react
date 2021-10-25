import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from "./shop.types"
import { firestore , convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
import { fetchCollectionsSuccess , fetchCollectionsFailiure } from "./shop.actions"

export function* fetchCollectionsAsync(){
    console.log(" am fired")
    try{
    const collectionRef = firestore.collection("collections")
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap,snapshot)
    yield put(fetchCollectionsSuccess(collectionMap))
    }
    catch(error){
        yield put(fetchCollectionsFailiure(error))
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    )
}