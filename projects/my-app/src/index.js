// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import { createStore } from 'redux';
import { provider, Provider } from 'react-redux';

// import App from './App';
import PokeApp from './PokeApp';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import rootReducer from './reduces/rootReducer';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {' '}
    <PokeApp />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
