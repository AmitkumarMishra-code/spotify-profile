import LogIn from "./components/LogIn";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/Main";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/main" component={Main}/>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
