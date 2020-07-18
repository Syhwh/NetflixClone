import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MainPage } from './components/MainPage';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';

import './App.css';
import { stateReducer } from './reducers/stateReducer';
import { URLProvider } from './helpers/searchUrlContext';

function App() {
  useReducer(stateReducer, [])
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
