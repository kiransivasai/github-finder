import React, { Fragment, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";

import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  // //Get user Repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:username"
                render={(props) => (
                  <User
                    {...props}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
