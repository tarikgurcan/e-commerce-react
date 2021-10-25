import React from "react"
import { Homepage } from "./pages/homepage/homepage.components";
import {Route,Switch,Redirect} from "react-router-dom"
import "./App.css"
import Shoppage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/SingInAndSignUp/SingInAndSignUp.component";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user-action";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unSubscribefromAuth=null

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();

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
  }
//Prevent Memory Leaks
  componentWillUnmount(){
    this.unSubscribefromAuth()
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shoppage}/>
        <Route exact path="/signin" render={()=>{
          return(
          this.props.currentuser?<Redirect to="/"/>:(<SignInSignUp/>))
        }}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  currentuser:state.user.currentuser,
  // collectionArray:selectCollectionPreview(state)
})

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App);
