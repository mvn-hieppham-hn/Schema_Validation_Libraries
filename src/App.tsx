import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { URL } from "./constants/route.constant";
import Accounts from "./screens/yup/Accounts";

import Home from "./screens/Home";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={URL.HOME}>Home</Link>
            </li>

            <li>
              <Link to={URL.ACCOUNTS}>Accounts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={URL.HOME}>
            <Home />
          </Route>

          <Route path={URL.ACCOUNTS}>
            <Accounts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
