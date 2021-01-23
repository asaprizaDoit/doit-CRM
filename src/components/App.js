import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./PageNotFound";
import SendRequestLeave from "./request leave/SendRequestLeave";
import "./../css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <header className="col">hola</header>
      </div> */}
      <div className="row">
        {/* <aside className="col-sm-2">como</aside> */}
        <main className="col-sm-12">
          <Switch>
            <Route exact path="/" component={SendRequestLeave} />
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </main>
      </div>
      {/* <div className="row">
        <footer className="col">Bien</footer>
      </div> */}
    </div>
  );
}

export default App;
