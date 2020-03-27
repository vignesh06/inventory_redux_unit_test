import React, { useState, useEffect } from 'react';
import Admin from './Layout/Admin'
import Login from './Layout/Login'
import ForgotPassword from './Layout/ForgotPassword'
import signup from './Layout/Signup'
import internalservererror from './ErrorPages/InternalServer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './store/reducers/Login';

const rootReducer = combineReducers({
  login:loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => {
  console.log(store.getState());
});
function App() {
  return (
    <React.Fragment>
        <Provider store={store}>
      <Router >
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/internal-server-error" component={internalservererror} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
