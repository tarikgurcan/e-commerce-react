import userActionTypes from "./user-types";

const INITIAL_STATE={
    currentuser:null
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userActionTypes.SIGN_IN_SUCCSESS:
            return{
                ...state,
                currentuser:action.payload,
                error:null
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentuser:null,
                error:null
            }
        case userActionTypes.SING_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                    ...state,
                    error:action.payload
                }
        default:
            return state;  

    }
    

}

export default userReducer