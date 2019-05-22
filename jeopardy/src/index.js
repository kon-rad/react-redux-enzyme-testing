import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import App from 'components/App';
import Category from 'components/Category';
import 'index.css';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/category' component={Category} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);