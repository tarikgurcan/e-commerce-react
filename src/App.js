import HomePage from "./pages/HomePage/homepage.component.jsx";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/shoppage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import React from "react"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        }
        )
      }
      this.setState({currentUser:userAuth})
    })
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signInSignUp" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
