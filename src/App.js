import HomePage from "./pages/HomePage/homepage.component.jsx"
import "./App.css"
import {Switch,Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage/shoppage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/signInSignUp" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
