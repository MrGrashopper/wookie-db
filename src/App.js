// process.env.REACT_APP_WOOKIE_KEY
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Details from "./routes/Details/Details";
import SearchResult from "./routes/SearchResult/SearchResult";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>     
          <Route path="/details/:title">
            <Details/>
          </Route>    
          <Route path="/search/:search">
            <SearchResult/>
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
