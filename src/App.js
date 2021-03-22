import HomePage from "./pages/homepage.component"
import "./App.css"
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
