import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import SearchPage from "./components/pages/Search";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
