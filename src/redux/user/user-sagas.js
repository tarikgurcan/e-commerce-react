import {put,takeLatest} from "redux-saga/effects"
import {all, call} from "redux-saga/effects"
import userActionTypes from "./user-types"
import {auth, createUserProfileDocument, getCurrentUser, Googleprovider} from "./../../firebase/firebase.utils"
import { SignInSuccsess, SignOutFailure, SignOutSuccsess, SignUpError, SignUpSuccsess, SingInFailure } from "./user-action";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      const userRef = yield call(
        createUserProfileDocument,
        userAuth,
        additionalData
      );
      const userSnapshot = yield userRef.get();
      yield put(SignInSuccsess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(SingInFailure(error));
    }
  }

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(Googleprovider);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnaphot= yield userRef.get()
        yield put(SignInSuccsess({id:userSnaphot.id,...userSnaphot.data()}));
    }
    catch(err){
        yield put(SingInFailure(err))
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }){
    try{    
        console.log(email,password)
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        const userRef=yield call(createUserProfileDocument,user);
        const userSnaphot= yield userRef.get()
        console.log(userSnaphot)
        yield put(SignInSuccsess({id:userSnaphot.id,...userSnaphot.data()}));


    }catch(err){
        yield put(SingInFailure(err))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return ;
        yield getSnapshotFromUserAuth(userAuth)
        
    }catch(err){
        yield put (SingInFailure(err))
    }
}

export function* SignOut(){
    try{
    yield auth.signOut();
    yield put(SignOutSuccsess())
    }
    catch(err){
        yield put(SignOutFailure(err))
    }
}


export function* SignUp({payload:{email,password,displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password)
        yield put(SignUpSuccsess({user:user,additionalData:{displayName}}))

    }catch(err){
        yield put(SignUpError(err))
    }

}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,SignUp)
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SING_IN_START, signInWithEmail)
}


export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,SignOut)
}

export function* onSignUpSuccsess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccsess)])
}
