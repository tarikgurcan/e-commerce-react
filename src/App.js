import React, { lazy, Suspense } from "react"
import { useEffect } from "react";
import {Route,Switch,Redirect} from "react-router-dom"
import {GlobalStyle} from "./global.styles"
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user-action";
import { Spinner } from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";


const HomePage = lazy(() => import('./pages/homepage/homepage.components'));
const Shoppage = lazy(()=>import("./pages/shoppage/shoppage.component"))
const SignInSignUp = lazy(()=>import("./pages/SingInAndSignUp/SingInAndSignUp.component"))
const CheckoutPage = lazy(()=>import("./pages/checkout/checkout.component"))


const App =({currentuser,checkUserSession})=> {

useEffect(()=>{
  checkUserSession()
},[checkUserSession])

  //   this.unSubscribefromAuth=auth.onAuthStateChanged(async (userAuth)=>{
  //     if(userAuth){
  //       const userRef=await createUserProfileDocument(userAuth)

  //       userRef.onSnapshot((snapshot)=>{
  //         setCurrentUser({
  //             id:snapshot.id,
  //             ...snapshot.data()
  //           })
  //         })
  //       }
  //     else{
  //       setCurrentUser(userAuth)
  //     }
  // })


  
  // ADDİNG SHOP DATA TO FİREBASE
  // addCollectionAndDocuments("collections",
  // collectionArray.map(({title,items})=>({title,items})))

//Prevent Memory Leaks

    return (
      <div>
      <GlobalStyle/>
        <Header/>
        <Switch>
          <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
        <Route exact path="/" component={HomePage}/>

        <Route path="/shop" component={Shoppage}/>
        <Route exact path="/signin" render={()=>{
          return(
          currentuser?<Redirect to="/"/>:(<SignInSignUp/>))
        }}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        </Suspense>
        </ErrorBoundary>
        </Switch>
      </div>
    );
  }

const mapStateToProps=(state)=>({
  currentuser:state.user.currentuser,
  // collectionArray:selectCollectionPreview(state)
})

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
