import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MainPage } from './components/MainPage';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';
import { URLProvider } from './helpers/searchUrlContext';

import './App.css';

function App() {

  return (<>
    <Router>
      <Switch>
        <URLProvider>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/main'} component={MainPage} />
          <Route exact path={'/results'} component={SearchResults} />
        </URLProvider>
      </Switch>
    </Router >
  </>);
}

export default App;
