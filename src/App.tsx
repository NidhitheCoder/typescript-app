import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";
import { AppRoutes } from "./config/config";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import More from './pages/More';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.HOME} component={Home} />
          <Route exact path={AppRoutes.PROFILE} component={Profile} />
          <Route exact path={AppRoutes.SETTINGS} component={Settings} />
          <Route exact path={AppRoutes.MORE} component={More} />
        </Switch>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
