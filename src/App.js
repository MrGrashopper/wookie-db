// process.env.REACT_APP_WOOKIE_KEY
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Details from "./routes/Details/Details";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>     
          <Route path="/details/:title">
            <Details/>
          </Route>    
          <Route path="/">
            <Home />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
