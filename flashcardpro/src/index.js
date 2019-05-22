import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import rootReducer from 'reducers';
import { setStack } from 'actions';
import './index.css';

const store = createStore(rootReducer);

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));
ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/stack" component={Stack} />
              <Route path="/stack_form" component={StackForm} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);