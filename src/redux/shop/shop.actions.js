import {ShopActionTypes} from "./shop.types"
import { firestore , convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"



export const fetchCollectionsStart=()=>({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef = firestore.collection("collections")
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(snapshot => {
          const collectionMap = convertCollectionsSnapshotToMap(snapshot)
          dispatch(fetchCollectionsSuccess(collectionMap))
        }).catch(err=>dispatch(fetchCollectionsFailiure(err.message)))
    }
}

export const fetchCollectionsSuccess=collectionMap => ({
    type:ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionMap
})

export const fetchCollectionsFailiure=errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTION_FAILIURE,
    payload:errorMessage
})