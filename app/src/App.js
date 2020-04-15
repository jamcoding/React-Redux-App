import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { rootReducer } from './reducers';
import BasketballPlayers from './BasketballPlayers';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Players</h1>
        <BasketballPlayers />
      </div>
    </Provider>
  );
}
