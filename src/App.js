import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AnonymousHomePage from "./page/AnonymousHomePage";
import './App.css';
import LoginPage from "./page/LoginPage";
import TimelinePage from "./page/TimelinePage";
import ProfilePage from "./page/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/accounts/login">
          <LoginPage/>
        </Route>
        <Route path="/timeline">
          <TimelinePage/>
        </Route>
        <Route path="/:username">
          <ProfilePage/>
        </Route>
        <Route path="/">
          <AnonymousHomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
