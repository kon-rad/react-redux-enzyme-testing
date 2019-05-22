import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Stack from './components/Stack';
import rootReducer from 'reducers';

const store = createStore(rootReducer);

ReactDOM.reder(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/stack" component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));