import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/home/HomePage";
import SubredditPage from "./pages/subreddit/SubredditPage";




function App() {

  return (
      <>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route path="/subreddit/:id">
                  <SubredditPage />
              </Route>
          </Switch>

          <footer className="outer-content-container">
              <div className="inner-content-container">
                <div>Assignmet NOVI Hogeschool © 2022</div>
                <div>Edwin Rodriguez Valle</div>
              </div>
          </footer>
      </>

  );
}

export default App;
