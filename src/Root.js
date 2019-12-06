import { hot } from 'react-hot-loader/root';
import React from 'react';
import GameContainer from './container/GameContainer';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const store = createStore(
  rootReducer, 
  applyMiddleware(reduxThunk, reduxLogger)
);

const Root = () => {
  return (
    <Provider store={ store }>
      <>
        <GlobalStyle />
        <GameContainer />
      </>
    </Provider>
  );
}

export default hot(Root);