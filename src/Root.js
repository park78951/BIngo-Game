import { hot } from 'react-hot-loader/root';
import React from 'react';
import GameContainer from './container/GameContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <GameContainer />
    </>
  );
}

export default hot(Root);