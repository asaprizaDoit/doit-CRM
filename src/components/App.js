import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
