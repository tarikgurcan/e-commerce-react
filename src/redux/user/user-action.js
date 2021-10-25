import userActionTypes from "./user-types";

export const googleSignInStart=()=>({
    type:userActionTypes.GOOGLE_SIGN_IN_START
})

export const SignInSuccsess=(user)=>({
    type:userActionTypes.SIGN_IN_SUCCSESS,
    payload:user
})

export const SingInFailure=err=>({
    type:userActionTypes.SING_IN_FAILURE,
    payload:err
})

export const emailSignInStart=(emailAndPassword)=>({
    type:userActionTypes.EMAIL_SING_IN_START,
    payload:emailAndPassword
})

export const checkUserSession=()=>({
    type:userActionTypes.CHECK_USER_SESSION
})


export const SignOutStart=()=>({
    type:userActionTypes.SIGN_OUT_START,
})

export const SignOutSuccsess=()=>({
    type:userActionTypes.SIGN_OUT_SUCCESS,
})

export const SignOutFailure=(err)=>({
    type:userActionTypes.SIGN_OUT_START,
    payload:err
})

export const SignUpStart=(userCredintials)=>({
    type:userActionTypes.SIGN_UP_START,
    payload:userCredintials
})

export const SignUpSuccsess=({user,additionalData})=>({
    type:userActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
})

export const SignUpError=(err)=>({
    type:userActionTypes.SIGN_OUT_FAILURE,
    payload:err
})