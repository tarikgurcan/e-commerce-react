import HomePage from "./pages/HomePage/homepage.component.jsx";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/shoppage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import React from "react"
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user-actions"

class App extends React.Component {
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        }
        )
      }
      setCurrentUser(userAuth)
    })
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signInSignUp" render={()=>this.props.currentUser?(<Redirect to="/"/>):<SignInSignUp/>} />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps=({user})=>({
 currentUser:user.currentUser
})

const mapDispatchtoProps=(dispatch)=>({
 setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
