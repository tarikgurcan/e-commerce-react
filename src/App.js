import React from "react"
import { Homepage } from "./pages/homepage/homepage.components";
import {Route,Switch,Redirect} from "react-router-dom"
import "./App.css"
import Shoppage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/SingInAndSignUp/SingInAndSignUp.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import { connect } from "react-redux";
import {setCurrentUser} from "./redux/user/user-action"
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unSubscribefromAuth=null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unSubscribefromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot)=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          })
        }
      else{
        setCurrentUser(userAuth)
      }
  })
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
  currentuser:state.user.currentuser
})

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
