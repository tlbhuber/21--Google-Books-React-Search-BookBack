import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>


      </Switch>
    </Router>

  );
}

export default App;